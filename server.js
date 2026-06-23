const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, "data", "approved-emails.json");
const HOTMART_HOTTOK = process.env.HOTMART_HOTTOK || "";

function readDb() {
  if (!fs.existsSync(DB_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(DB_FILE, "utf-8")); }
  catch { return {}; }
}
function writeDb(db) {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}
function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

// Hotmart envia esse webhook quando uma compra é aprovada.
// Configure a URL pública deste endpoint + o HOTTOK no painel da Hotmart
// (Ferramentas > Webhook), e defina a mesma variável HOTMART_HOTTOK no servidor.
app.post("/webhook/hotmart", (req, res) => {
  console.log("Webhook recebido da Hotmart:", JSON.stringify(req.body));

  const receivedToken = req.headers["x-hotmart-hottok"];
  if (HOTMART_HOTTOK && receivedToken !== HOTMART_HOTTOK) {
    console.log("Token recebido não bateu com o HOTMART_HOTTOK configurado.");
    return res.status(401).json({ error: "Token inválido" });
  }

  const event = req.body && req.body.event;
  const buyerEmail = normalizeEmail(
    req.body &&
    req.body.data &&
    req.body.data.buyer &&
    req.body.data.buyer.email
  );

  if (!buyerEmail) {
    return res.status(400).json({ error: "E-mail do comprador não encontrado no payload" });
  }

  const db = readDb();

  const approvalEvents = ["PURCHASE_APPROVED", "PURCHASE_COMPLETE"];
  const revokeEvents = ["PURCHASE_REFUNDED", "PURCHASE_CHARGEBACK", "PURCHASE_CANCELED", "PURCHASE_EXPIRED"];

  if (approvalEvents.includes(event)) {
    db[buyerEmail] = true;
  } else if (revokeEvents.includes(event)) {
    db[buyerEmail] = false;
  }

  writeDb(db);
  res.status(200).json({ ok: true });
});

// Frontend chama isso para verificar se o e-mail tem acesso liberado.
app.get("/api/check-access", (req, res) => {
  const email = normalizeEmail(req.query.email);
  const db = readDb();
  res.json({ access: !!db[email] });
});

// Útil só em ambiente de teste local, para liberar um e-mail manualmente
// sem precisar simular uma compra de verdade.
app.post("/api/dev-grant-access", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.status(403).json({ error: "Desativado em produção" });
  }
  const email = normalizeEmail(req.body.email);
  if (!email) return res.status(400).json({ error: "E-mail obrigatório" });
  const db = readDb();
  db[email] = true;
  writeDb(db);
  res.json({ ok: true });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend rodando na porta ${PORT}`));
