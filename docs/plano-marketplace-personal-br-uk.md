# Marketplace de Personal Training Brasil → Reino Unido
### Avaliação estratégica, modelo de negócio, plano de validação e pré-mortem

> Data: 29/10/2026 · Status: ideia organizada, **não validada** · Todos os números marcados com *(estimativa)* são premissas minhas e precisam ser testados.

---

## 0. Resumo executivo (leia isto primeiro)

**A ideia em uma frase:** personal trainers brasileiros acompanham alunos no Reino Unido de forma assíncrona (o aluno grava o vídeo, o personal corrige com texto, áudio ou desenho na imagem), tudo traduzido automaticamente; o aluno paga em libras e o personal recebe em reais, e a plataforma fica com uma parte.

**Veredito:** a ideia é **viável e tem significado real**. Ela pode multiplicar a renda de um profissional brasileiro (a mediana de um personal CLT fica em torno de R$ 2,5–3 mil/mês) e dar a quem está no UK um acompanhamento mais barato. Mas, do jeito que está desenhada hoje, tem **quatro problemas sérios**:

| # | Problema | Gravidade | Correção proposta |
|---|---|---|---|
| 1 | **A conta do câmbio está otimista.** £100 hoje dá ~R$ 660–690 brutos, não R$ 700. Depois de taxas e da comissão, o personal recebe **~R$ 500–530**. | Média | Refazer o preço (seção 4). Continua muito atrativo para o personal. |
| 2 | **Cobrar três vezes** (assinatura do aluno + assinatura do personal + % do personal) trava o início de qualquer marketplace. | Alta | No começo, só **comissão embutida no preço**. Assinatura do personal entra depois, como ferramenta premium. |
| 3 | **Desintermediação.** Aluno e personal falam português, se conhecem e vão para o WhatsApp + Pix/Wise. É **o risco que mais mata** esse tipo de negócio. | **Crítica** | O produto precisa valer mais que a taxa (seção 6). |
| 4 | **O mercado inicial é pequeno.** Os brasileiros no UK são ~120–230 mil pessoas. Isso dá um negócio de nicho (~£10k/mês de receita), não uma startup, a menos que haja expansão. | Alta | Usar a diáspora como **cabeça de praia** e planejar a expansão desde o início (Portugal, Irlanda, EUA e alunos britânicos). |

**Recomendação:** **não construa um app agora.** Faça um **MVP "concierge" de 8 semanas** com ferramentas prontas, 5–10 personais e 20–40 alunos pagantes, com **critérios de parada definidos antes de começar** (seção 8). Isso também responde ao seu padrão de "começar e parar": o projeto passa a ter data, métrica e decisão, em vez de depender de motivação.

---

## 1. A ideia organizada

### 1.1 Proposta de valor

| Para quem | Dor | O que a plataforma entrega |
|---|---|---|
| **Aluno no UK** | Um personal presencial custa £45–75/sessão no interior e £75–140 em Londres. Coaching online custa £120–300/mês ([REPS UK, 2026](https://repsuk.org/resources/personal-trainer-cost-uk-2026)). Rotina pesada e pouco tempo. | Acompanhamento real por ~£39–69/mês: treino prescrito e correção de técnica por vídeo, com resposta em até 48h. |
| **Personal no Brasil** | Renda baixa (média CLT de ~R$ 2.990, mediana de ~R$ 2.520 — [Salário.com.br/CAGED](https://www.salario.com.br/profissao/personal-training-cbo-224120/)). Não fala inglês. | Alunos pagando em libras, recebimento em reais, tradução automática e uma agenda assíncrona (atende de qualquer lugar e em qualquer horário). |
| **Você (plataforma)** | — | Comissão sobre as transações e, depois, ferramentas pagas para os personais. |

### 1.2 Fluxo do produto (versão final, não o MVP)

1. O aluno faz um cadastro com anamnese e PAR-Q (questionário de prontidão para atividade física) e escolhe o personal (perfil, CREF verificado, avaliações).
2. O personal monta o treino. A plataforma traduz o treino PT→EN com um glossário técnico fixo.
3. O aluno treina e grava vídeos de 10–30 segundos dos exercícios-chave e faz o upload.
4. O personal revisa:
   - **Texto** (traduzido automaticamente);
   - **Áudio** (transcrito com reconhecimento de voz e depois traduzido; o aluno recebe o texto em inglês e, opcionalmente, o áudio original);
   - **Desenho no quadro** ("telestrator"): pausa o vídeo, congela o frame e desenha linhas, ângulos e setas. Isso já existe em apps de análise esportiva como OnForm e Hudl Technique, então é factível.
5. Chat traduzido nos dois sentidos, com check-in semanal e fotos e medidas de progresso.
6. O pagamento é recorrente no cartão (GBP) e o repasse em BRL é mensal, via um provedor regulado.

### 1.3 O que eu mudaria no conceito

- **Corrigir a ordem dos públicos.** A ideia original mistura dois mercados muito diferentes:
  - **A — Brasileiros no UK:** falam português (a tradução nem é necessária), confiam culturalmente, são sensíveis a preço e são fáceis de alcançar (grupos de Facebook/WhatsApp, igrejas, comunidades em Londres).
  - **B — Britânicos e outros falantes de inglês:** um mercado enorme, mas comprar de um coach com quem você não conversa diretamente é uma barreira grande de confiança, e a concorrência é forte.
  - **Recomendação:** começar pelo **A** para validar a operação e o pagamento. A tradução vira **o diferencial da fase 2**, para abrir o **B**. Isso inverte o seu plano, mas reduz muito o risco.
- **A métrica de valor é aderência, não técnica.** A ciência mostra que o maior ganho de ter um treinador é a consistência e a progressão de carga (seção 3). O produto deve ser desenhado em torno de "não deixar o aluno sumir".

---

## 2. Mercado

| Dado | Valor | Fonte / qualidade |
|---|---|---|
| Brasileiros no UK | ~119 mil nascidos no Brasil em Inglaterra e País de Gales (Censo 2021); o consulado estima ~220 mil (2020). Faixa defensável: **120–230 mil** | [Wikipedia (compila ONS e consulado)](https://en.wikipedia.org/wiki/Brazilians_in_the_United_Kingdom), [RGS](https://www.rgs.org/media/rnonqal0/6-brazilian-diaspora.docx) — os dados oficiais subestimam quem está irregular |
| Preço de PT no UK | £20–90/sessão (mediana ~£70); Londres £75–140 | [Airtasker](https://www.airtasker.com/uk/fitness/personal-training/price/personal-trainer-cost), [REPS](https://repsuk.org/resources/personal-trainer-cost-uk-2026) |
| Coaching online no UK | £120–300/mês (REPS); £40–80/mês em Oxford (BizHub365) | Fontes comerciais — a divergência é grande |
| Concorrente premium (EUA) | Future: US$ 199/mês, coach humano, recurso "Record My Form" | [Sensai (review de concorrente)](https://www.sensai.fit/blog/future-app-review-2026) |
| Consultoria online no Brasil | R$ 100–400/mês; com feedback semanal, R$ 200–700/mês | [FreelaSemCrise](https://www.freelasemcrise.com.br/blog/personal-trainer-quanto-cobrar), [Cronoshare](https://www.cronoshare.com.br/quanto-custa/personal-trainer-online) |
| Câmbio GBP/BRL | ~R$ 6,63 (08/10/2026); ~R$ 6,90 (02/10/2026) | [Longforecast](https://longforecast.com/gbp-brl), [exchange-rates.org](https://www.exchange-rates.org/exchange-rate-history/brl-gbp-2026-10-02) — confirme no dia |

### 2.1 Tamanho realista da cabeça de praia *(estimativa — validar)*

```
170 mil brasileiros (ponto médio)
× 75% adultos                         = ~127 mil
× ~16% frequentam academia            = ~20 mil   (taxa de penetração UK, premissa)
× 5% pagariam coaching online         = ~1.000 alunos pagantes (teto prático)
× £50/mês × 20% de comissão           = ~£10 mil/mês de receita bruta da plataforma
```

**Leitura crítica:** isso paga um negócio enxuto de uma pessoa, mas **não é escala**. Para virar empresa, é preciso abrir a diáspora em outros países (Portugal tem a maior comunidade brasileira da Europa; também EUA e Irlanda) e/ou o público de língua inglesa. O nicho é ótimo para **validar**, não para **parar**.

---

## 3. A ciência: acompanhamento assíncrono funciona? (estudos antigos vs. recentes)

| Época | Estudo | Achado | O que muda para o seu produto |
|---|---|---|---|
| 2000 | Mazzetti et al., *Med Sci Sports Exerc* ([PubMed](https://pubmed.ncbi.nlm.nih.gov/10862549/)) | 12 semanas: o grupo **supervisionado** aumentou a carga mais rápido e ganhou mais força máxima que o não supervisionado. Amostra pequena (n=18). | O valor do treinador está na **progressão de carga** e no "empurrão", e não só na técnica. |
| 2009 | Davis & Hendrick (citado em [revisão](https://ejournal.upsi.edu.my/index.php/JSSPJ/article/view/680)) | Feedback por vídeo ≈ feedback verbal para aprender o agachamento. | O vídeo funciona; oferecer **as duas formas** (desenho e áudio) é o ideal. |
| 2021 | Mödinger, Woll & Wagner — revisão sistemática ([OUCI](https://ouci.dntb.gov.ua/works/4O52XVj9)) | Feedback visual por vídeo foi mais eficaz que só verbal (11 estudos, educação física). | Reforça o recurso de desenhar no frame. |
| 2022 | Fisher et al. — meta-análise (via [resumo secundário](https://www.fitbudd.com/is-a-personal-trainer-worth-it), não verifiquei o original) | A supervisão dá uma vantagem **pequena** em força (ES ~0,40) e é desprezível para hipertrofia. | O presencial não é imprescindível, o que **sustenta o modelo remoto**. |
| 2025 | Gavanda et al. — RCT, n=79 ([PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12529976)) | Aderência: supervisionado 88%, **app 81%**, PDF 52%. | O app guiado chega perto do presencial; um PDF solto fracassa. **A plataforma é o que segura o aluno.** |
| 2026 | Meta-análise de mHealth em treino resistido (resumo) | ES 0,40 a favor do mHealth na aderência. | Confirma a tendência. |
| 2023→2026 | Estimativa de pose por IA (MediaPipe) ([2023 Curr Dir Biomed Eng](https://katalog.lib.cas.cz/KNAV/EdsRecord/edsdoj,edsdoj.b1b1d4db2666494cacf7bcbcee8cdaa3); [2026 PoseTracker](https://journal.binus.ac.id/index.php/ijcshai/article/view/15123)) | 2023: depende muito do ângulo da câmera. 2026: 82–88% de acerto em celular, com estudos pequenos. | A IA **não substitui** o personal. Pode servir como **pré-triagem** (marcar reps suspeitas) na fase 2. |

**Síntese:** a evidência antiga (2000) dizia "a supervisão presencial vence". A evidência recente (2022–2026) diz que **a diferença é pequena se houver acompanhamento estruturado e frequente**. O seu modelo está alinhado com a evidência atual, **desde que** garanta frequência (check-ins, prazos de resposta, lembretes). Ressalva: os estudos são pequenos e quase sempre com jovens saudáveis.

---

## 4. Modelo de receita e números

### 4.1 Crítica ao modelo "assinatura do aluno + assinatura do personal + %"

- Em marketplace, **cada cobrança extra reduz a oferta ou a demanda** justamente quando as duas ainda são frágeis.
- Assinatura do personal **antes** de ele ter alunos = ninguém entra.
- Assinatura do aluno **separada** do preço do personal = parece que ele paga duas vezes.
- Uma pesquisa de 2025 na *Operations Research* ([INFORMS](https://pubsonline.informs.org/doi/fpi/10.1287/opre.2025.2046)) e um working paper sobre transações repetidas ([HHS](https://research.hhs.se/esploro/outputs/workingPaper/Platform-Disintermediation-with-Repeated-Transactions/991001639497206056)) sugerem cobrar **mais no início da relação** ("front-loaded", por exemplo uma taxa de matrícula/avaliação inicial) para se proteger da desintermediação.

### 4.2 Modelo recomendado

| Fase | Aluno paga | Personal paga | Plataforma ganha |
|---|---|---|---|
| **MVP / ano 1** | Plano mensal único (preço final, já com tudo dentro) + **avaliação inicial de £19–29** | Nada | 20–25% do plano + 100% da avaliação inicial |
| **Ano 2+** | Igual | Plano "Pro" opcional (£5–10/mês): mais alunos, vitrine, IA de pré-triagem, analytics | Comissão + SaaS |

### 4.3 Simulação (câmbio de R$ 6,70; taxas *estimadas* — confirmar com o provedor)

| Item | Plano Essencial £59 | Plano Premium £99 |
|---|---|---|
| Taxa de cartão UK (~1,5% + 20p) | −£1,09 | −£1,69 |
| Comissão da plataforma (20%) | £11,80 | £19,80 |
| Repasse ao personal (80%) | £47,20 | £79,20 |
| Câmbio/repasse (~1,5%) | −£0,71 | −£1,19 |
| **Personal recebe** | **~£46,5 ≈ R$ 311** | **~£78 ≈ R$ 523** |
| **Plataforma líquido** (absorvendo o cartão) | **~£10,7** | **~£18,1** |

**Para o personal** (capacidade *estimada* de ~1,5h/aluno/mês no assíncrono): 30 alunos no Essencial ≈ **R$ 9.300/mês**; 30 no Premium ≈ **R$ 15.700/mês**. São 3 a 5 vezes a mediana nacional. **Esse é o gancho de recrutamento**, e é aí que está o "significado" do projeto.

**Risco cambial:** o real oscilou ~4% em uma semana em outubro de 2026. Defina o preço em GBP e o repasse em BRL no câmbio do dia, e comunique isso de forma transparente ao personal.

---

## 5. Pagamentos: como cobrar e repassar **sem o dinheiro passar pela sua conta pessoal**

### 5.1 O que descobri

- **Stripe Connect não faz repasse self-serve para contas no Brasil** a partir de uma plataforma UK: o cross-border só cobre UK/EEE/EUA/Canadá/Suíça ([Stripe Docs](https://docs.stripe.com/connect/cross-border-payouts)). O "Global Payouts" existe para plataformas UK/EUA, mas é preciso confirmar com a Stripe se o Brasil está incluído.
- **EBANX** oferece payout em BRL via Pix para freelancers, sem entidade local e com API em lote ([EBANX](https://ebanx.com/en/payout-for-contractors-and-freelancers-in-brazil)). Os números são autodeclarados.
- **Airwallex**: o Pix está em beta para empresas UK ([Airwallex Docs](https://www.airwallex.com/docs/payments__north-america-and-latam__pix-beta)).
- **Payoneer** e **Wise Business** (pagamentos em lote) também são opções, mas a cobertura e o custo variam por conta.

### 5.2 Duas arquiteturas possíveis

| | **A — "Merchant of record"** (recomendado para o MVP) | **B — Marketplace com split** (escala) |
|---|---|---|
| Como funciona | A **sua empresa UK (Ltd)** vende o serviço ao aluno e **contrata** o personal brasileiro como fornecedor (invoice de exportação de serviço). | O provedor (Stripe + EBANX/Airwallex) cobra o aluno e repassa direto ao personal, retendo a sua comissão. |
| Prós | Simples, rápido e legalmente claro: é revenda de serviço, não "serviço de pagamento". Você controla a qualidade. | O dinheiro do personal nunca é seu e o modelo escala. |
| Contras | A receita bruta inteira é sua, então o **IVA de 20% sobre o total** entra quando passar de **£90 mil/ano**. Você responde pelo serviço. | Integração mais complexa; regras do provedor; precisa de KYC dos personais. |
| Regulatório UK | Sem licença de pagamento. | Use **só provedores regulados**. Se você receber e repassar dinheiro de terceiros por conta própria, pode cair nas Payment Services Regulations 2017 (existe a exclusão de "agente comercial", mas ela é estreita). **Validar com advogado.** |

**Ponto que você levantou ("não quero complicar a minha conta"):** nunca use a conta pessoal. Abra uma **Ltd** (Companies House, ~£50) com conta empresarial (Wise Business, Tide ou Starling). No modelo A, o dinheiro passa pela conta da *empresa*, como receita dela. No modelo B, nem isso.

---

## 6. Desintermediação: o risco nº 1

**Evidência:** em um marketplace de freelancers, aumentar a confiança entre as partes **aumentou** a desintermediação ([Gu & Zhu, *Management Science*](https://pubsonline.informs.org/doi/fpi/10.1287/mnsc.2020.3583)). Ou seja, quanto melhor a relação aluno–personal, maior a chance de os dois saírem da plataforma. Em outro estudo de campo, introduzir comissão **dobrou** as transações por fora ([PKU/PHBS](https://english.phbs.pku.edu.cn/info/3882/48882.htm)).

**Defesas (por ordem de eficácia):**

1. **Fazer a plataforma ser a ferramenta de trabalho**, não só o ponto de encontro: biblioteca de exercícios, editor de treino, desenho no vídeo, histórico de cargas, tradução. Ir para o WhatsApp tem que ser *pior* para o personal.
2. **Resolver o pagamento melhor que o Pix "por fora":** cartão recorrente em GBP para o aluno, reais na conta do personal, recibo e cobrança automática de inadimplente. Hoje o personal brasileiro *não tem* como cobrar cartão britânico recorrente sozinho, e isso é a sua alavanca.
3. **Comissão moderada** (20%, não 30%) e **taxa inicial** (front-loading).
4. **Benefícios que só existem dentro:** garantia de reembolso no 1º mês, seguro, selo de verificação, avaliações e ranking (mais alunos para quem fica).
5. Regra nos termos (proibição de contato por fora nos primeiros 12 meses) e detecção de telefone/e-mail no chat. Ajuda pouco sozinha (é o que a Upwork faz).

**Aceite a realidade:** alguma perda vai acontecer. **Meça** (alunos que cancelam e continuam com o mesmo personal) e trate como métrica de produto.

---

## 7. Jurídico, fiscal e regulatório (checklist)

> Não sou advogado nem contador. Isto é um mapa de riscos para levar a um profissional, não uma consulta. Prioridade: ⚠️ = resolver antes de cobrar o primeiro cliente.

### Reino Unido
- ⚠️ **Empresa Ltd** + conta empresarial. Nunca opere pela conta pessoal.
- ⚠️ **UK GDPR**: vídeos do corpo, medidas, lesões e anamnese tendem a ser **dados de saúde (categoria especial)**. Exige base legal do Art. 6 **e** condição do Art. 9 (consentimento explícito), **DPIA** (o ICO cita apps de fitness como exemplo de alto risco), política de retenção e transferência internacional para o Brasil (adequação/cláusulas-padrão). Registro no ICO (~£40–60/ano). ([Sprintlaw](https://sprintlaw.co.uk/articles/data-protection-healthtech-apps/), [Fieldfisher](https://fieldfisher.com/en/insights/new-report-from-ico-offers-useful-pointers-for-firms-in-consumer-healthtech-industry))
- **Reporting rules for digital platforms (SI 2023/817)**: no modelo B, a plataforma precisa coletar e verificar dados dos "sellers" (os personais) e reportar ao HMRC todo ano. Serviços pessoais estão no escopo ([legislation.gov.uk](https://legislation.gov.uk/uksi/2023/817/pdfs/uksiem_20230817_en_001.pdf)).
- **IVA**: o limite é £90 mil (empresa estabelecida no UK). Ponto sensível: quem é o fornecedor do serviço ao consumidor britânico? Se o HMRC entender que é a plataforma, o IVA incide sobre o preço total. Coaching com intervenção humana *em geral* não é "electronically supplied service", mas **confirme com um contador**.
- **Seguro**: no UK não há licença obrigatória para PT, mas é preciso **professional indemnity/public liability** que cubra personais estrangeiros atendendo clientes UK. Verificar com seguradoras (Insure4Sport e similares).
- **Consumer Contracts Regulations 2013**: direito de cancelamento de 14 dias, assinatura fácil de cancelar e preço claro.

### Brasil (lado do personal)
- ⚠️ **CREF ativo** é obrigatório para atendimento remoto (**Resolução CONFEF 542/2024**). Empresa que oferece o serviço precisa de **Responsável Técnico** com CREF, o que é relevante se um dia você abrir CNPJ no Brasil ([Normas Brasil](https://www.normasbrasil.com.br/norma/resolucao-542-2024_463073.html)). A resolução não trata de aluno no exterior, então vale consulta ao CONFEF.
- **Personal não pode ser MEI** desde 2018 (CGSN 137/2017; CNAE 9313-1/00) ([Tribuna PR](https://www.tribunapr.com.br/noticias/curitiba-regiao/personal-trainer-e-contador-nao-podem-mais-atuar-como-mei/amp/), [Contabilizei](https://www.contabilizei.com.br/contabilidade-online/personal-trainer-mei/)). As opções são **pessoa física com carnê-leão** (IR até 27,5%) ou **ME no Simples Nacional**. Isso é atrito de onboarding, então ofereça um guia ou um contador parceiro.
- **IOF**: receita de **exportação de serviços** tem alíquota **zero** (Decreto 6.306/2007, art. 15-B). Entradas "não especificadas" pagam 0,38%. As regras mudaram várias vezes em 2025 (Decretos 12.466 e 12.499) ([Migalhas](https://www.migalhas.com.br/depeso/396786/a-aliquota-zero-de-iof-nas-receitas-de-exportacao), [Remessa Online](https://www.remessaonline.com.br/blog/iof-cambio-envio-exterior/)). O provedor de payout precisa classificar a operação corretamente.
- **Reforma tributária**: profissionais com CREF podem ter redução de 30% em IBS/CBS (LC 214/2025, art. 127). É uma fonte secundária e precisa ser confirmada.

---

## 8. Plano de validação (MVP concierge — 8 semanas, sem programar)

### 8.1 Stack sem código *(custo estimado < £100/mês)*
- **Landing page** em português (Carrd/Framer) + formulário (Tally).
- **Cobrança:** Stripe Payment Links / Billing (assinatura em GBP) na conta da Ltd.
- **Treino e vídeo:** um app de coaching pronto (TrueCoach, Trainerize ou Everfit) **ou** Google Drive + Loom. Teste de propósito se os personais *querem* a ferramenta.
- **Repasse:** Wise Business (pagamento em lote em BRL) contra invoice de exportação do personal.
- **Tradução** (para testar a fase 2 com 3–5 alunos britânicos): DeepL + transcrição automática, com revisão manual.

### 8.2 Operação
| Semana | Atividade |
|---|---|
| 0 | Abrir Ltd + ICO + termos/privacidade (modelos revisados por advogado) + seguro |
| 1–2 | Recrutar **5–10 personais** (com CREF ativo e bons de vídeo; você, ex-personal, avalia tecnicamente). Recrutar alunos em grupos de brasileiros no UK. Meta: **20–40 pagantes** |
| 3–8 | Operar: prazo de resposta < 48h, check-in semanal e entrevista com 5 alunos e 3 personais a cada 2 semanas |
| 8 | **Decisão** com base nos critérios abaixo |

### 8.3 Critérios de decisão (definidos AGORA, antes de começar)

| Métrica | Continuar ✅ | Ajustar ⚠️ | Parar ❌ |
|---|---|---|---|
| Visitante da landing → pagante | ≥ 3% | 1–3% | < 1% |
| Retenção mês 1 → mês 2 | ≥ 70% | 50–70% | < 50% |
| Retenção mês 2 → mês 3 | ≥ 75% | 55–75% | < 55% |
| NPS dos alunos | ≥ 40 | 20–40 | < 20 |
| Personais que querem continuar | ≥ 80% | 50–80% | < 50% |
| Desintermediação detectada | < 10% | 10–25% | > 25% |
| CAC (custo para adquirir um aluno) | < 1,5× a margem mensal | — | > 3× |

Referência: apps de fitness genéricos retêm só **3–8% dos usuários no dia 30** ([Business of Apps](https://businessofapps.com/data/health-fitness-app-benchmarks)). Coaching com humano tende a reter muito mais, e isso é exatamente o que precisa ser provado.

### 8.4 Só depois de validado: produto próprio (fase 2)
1. App (PWA ou React Native) com upload de vídeo, **telestrator** e chat traduzido (LLM + glossário fitness PT/EN + aviso de "tradução automática").
2. Payout automatizado (EBANX/Airwallex/Stripe Global Payouts).
3. Abrir o público de língua inglesa.
4. IA de pré-triagem de técnica (pose estimation), sempre **assistindo** o personal, nunca substituindo.

---

## 9. Concorrência e posicionamento

| Tipo | Exemplos | Por que o aluno escolheria você |
|---|---|---|
| Coaching premium com humano | Future (US$ 199/mês), Caliber | Você custa 1/3 a 1/2 do preço, com o mesmo formato |
| Software para personal (SaaS) | Trainerize, TrueCoach, Everfit | Eles não trazem alunos nem resolvem câmbio/tradução. **Você traz os dois** |
| Apps de IA / treino genérico | Fitbod e afins | Sem humano, a aderência é baixa (os dados de retenção confirmam) |
| Consultoria brasileira por WhatsApp | Milhares de personais | Pagamento em cartão GBP, garantia, ferramenta e curadoria |

**Posicionamento sugerido (fase 1):** *"Seu personal brasileiro, no seu bolso, pelo preço de uma academia."*
**Fase 2:** *"Elite coaching from Brazil — at a fraction of the price."*

---

## 10. PRÉ-MORTEM

> **Exercício:** é outubro de 2028 e o projeto morreu. Por quê? (Método de Gary Klein: imaginar a falha antes que ela aconteça, para encontrar riscos que o otimismo esconde.)

| # | "Morremos porque…" | Prob. | Impacto | Sinal de alerta precoce | Prevenção |
|---|---|---|---|---|---|
| 1 | **Você parou** (perda de energia, nenhuma meta clara, construiu app demais antes de vender) | **Alta** | Fatal | Semanas sem falar com clientes; tempo indo para o logo e o app | MVP concierge, critérios da seção 8.3, ritual semanal fixo e um sócio/accountability partner |
| 2 | **Desintermediação**: personais e alunos foram para o WhatsApp/Pix | Alta | Fatal | Cancelamentos com o mesmo personal continuando; contatos trocados no chat | Seção 6; medir desde o dia 1 |
| 3 | **Ovo e galinha**: personais sem alunos saíram, alunos sem escolha não vieram | Média-alta | Alto | < 3 alunos por personal no mês 2 | Recrutar poucos personais e concentrar demanda; você mesmo como personal-âncora no início |
| 4 | **Qualidade inconsistente**: um personal demorou 5 dias para responder e o aluno saiu falando mal nos grupos | Média | Alto | Tempo de resposta > 48h; NPS por personal | SLA contratual, ranking, curadoria rigorosa e substituição rápida |
| 5 | **Lesão de aluno + processo** sem seguro adequado | Baixa | Fatal | — | PAR-Q, termo de responsabilidade, triagem de condições médicas e seguro PI que cubra os estrangeiros |
| 6 | **Vazamento de vídeos do corpo** (GDPR) | Baixa | Fatal | — | Armazenamento criptografado, acesso mínimo, DPIA, exclusão automática após X meses |
| 7 | **Cobrança/IVA errado**: HMRC cobrou IVA retroativo sobre o faturamento total | Média | Alto | Passar de ~£70k/ano sem parecer de contador | Contador desde o início; modelar o IVA na precificação |
| 8 | **Payout travou**: o provedor bloqueou a conta (KYC/AML) ou o câmbio comeu a margem | Média | Alto | Repasses atrasando | Dois provedores homologados; reserva de caixa de 1 mês de repasses |
| 9 | **Erro de tradução** em instrução de segurança ("trave a lombar" virou outra coisa) | Média | Médio | Reclamações de clareza | Glossário fixo, frases-padrão revisadas por humano e o áudio original sempre disponível |
| 10 | **Mercado pequeno demais**: saturou em ~300 alunos e não escalou | Média-alta | Alto | Custo de aquisição subindo e grupos saturados | Plano de expansão (Portugal/Irlanda/EUA e o público em inglês) testado já no mês 4–6 |
| 11 | **Câmbio virou**: o real se valorizou e o personal passou a ganhar menos | Baixa-média | Médio | GBP/BRL < R$ 6 | Preço em GBP com reajuste anual; o valor para o personal continua alto mesmo assim |
| 12 | **Copiaram**: um app grande (ou um influencer fitness brasileiro) lançou o mesmo | Média | Médio | — | Vantagem de comunidade + curadoria + operação, não de tecnologia. Construir marca e base de personais leais rápido |

### Os 3 riscos para resolver antes de qualquer linha de código
1. **Risco #1 (você)** → critérios de decisão escritos e datados, com alguém cobrando.
2. **Risco #2 (desintermediação)** → testar no MVP se pagamento + ferramenta seguram as pessoas.
3. **Riscos #5–7 (jurídico)** → Ltd, ICO, termos, seguro e 1 hora com contador UK antes do 1º cliente.

---

## 11. Próximos passos (concretos, 30 dias)

- [ ] Confirmar o câmbio e as taxas reais (Stripe UK, Wise Business, EBANX) e refazer a tabela 4.3
- [ ] Conversar com **10 brasileiros no UK** (sem vender): quanto pagam hoje por treino, o que os faria pagar £49?
- [ ] Conversar com **10 personais no Brasil**: aceitariam 80% de £59? Têm CREF ativo? Gravam vídeo bem? Como recebem hoje?
- [ ] Abrir a Ltd e falar com um contador UK (IVA e modelo A vs. B)
- [ ] Montar a landing + o Stripe Payment Link e fazer pré-venda com **desconto de fundador**
- [ ] Definir a data da decisão (semana 8) e escrever os critérios (seção 8.3) com assinatura de um "cobrador"

---

### Fontes (agrupadas)
- **Câmbio:** [exchange-rates.org](https://www.exchange-rates.org/exchange-rate-history/brl-gbp-2026-10-02) · [Longforecast](https://longforecast.com/gbp-brl)
- **Mercado UK:** [REPS UK](https://repsuk.org/resources/personal-trainer-cost-uk-2026) · [Airtasker](https://www.airtasker.com/uk/fitness/personal-training/price/personal-trainer-cost) · [Origym](https://www.origym.co.uk/?p=23695) · [BizHub365](https://bizhub365.com/find/personal-trainer/oxford/cost/)
- **Diáspora:** [Wikipedia – Brazilians in the UK](https://en.wikipedia.org/wiki/Brazilians_in_the_United_Kingdom) · [RGS](https://www.rgs.org/media/rnonqal0/6-brazilian-diaspora.docx)
- **Brasil – renda e preços:** [Salário.com.br](https://www.salario.com.br/profissao/personal-training-cbo-224120/) · [Educa Mais Brasil](https://www.educamaisbrasil.com.br/cursos-e-faculdades/educacao-fisica/salario-de-educador-fisico-carreira) · [FreelaSemCrise](https://www.freelasemcrise.com.br/blog/personal-trainer-quanto-cobrar) · [Cronoshare](https://www.cronoshare.com.br/quanto-custa/personal-trainer-online)
- **Regulação BR:** [CONFEF 542/2024](https://www.normasbrasil.com.br/norma/resolucao-542-2024_463073.html) · [MEI – Tribuna PR](https://www.tribunapr.com.br/noticias/curitiba-regiao/personal-trainer-e-contador-nao-podem-mais-atuar-como-mei/amp/) · [IOF – Migalhas](https://www.migalhas.com.br/depeso/396786/a-aliquota-zero-de-iof-nas-receitas-de-exportacao) · [Remessa Online](https://www.remessaonline.com.br/blog/iof-cambio-envio-exterior/) · [Lefosse](https://lefosse.com/noticias/alerta/governo-muda-regras-de-iof-com-vigencia-imediata/)
- **Regulação UK:** [SI 2023/817](https://legislation.gov.uk/uksi/2023/817/pdfs/uksiem_20230817_en_001.pdf) · [Moore Kingston Smith](https://mooreks.co.uk/insights/new-reporting-requirements-for-digital-platform-operators-from-1-january-2024/) · [IVA – Avask](https://avask.com/blog/uk-vat-threshold-2026/) · [GDPR saúde – Sprintlaw](https://sprintlaw.co.uk/articles/data-protection-healthtech-apps/) · [Fieldfisher](https://fieldfisher.com/en/insights/new-report-from-ico-offers-useful-pointers-for-firms-in-consumer-healthtech-industry)
- **Pagamentos:** [Stripe cross-border payouts](https://docs.stripe.com/connect/cross-border-payouts) · [EBANX Payout](https://ebanx.com/en/payout-for-contractors-and-freelancers-in-brazil) · [Airwallex Pix](https://www.airwallex.com/docs/payments__north-america-and-latam__pix-beta) · [XTransfer (comparativo, parcial)](https://www.xtransfer.com/blog/brazil-pix-business-payments)
- **Ciência:** [Mazzetti 2000](https://pubmed.ncbi.nlm.nih.gov/10862549/) · [Gavanda 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12529976) · [Mödinger 2021](https://ouci.dntb.gov.ua/works/4O52XVj9) · [Feedback agachamento](https://ejournal.upsi.edu.my/index.php/JSSPJ/article/view/680) · [MediaPipe 2023](https://katalog.lib.cas.cz/KNAV/EdsRecord/edsdoj,edsdoj.b1b1d4db2666494cacf7bcbcee8cdaa3) · [PoseTracker 2026](https://journal.binus.ac.id/index.php/ijcshai/article/view/15123)
- **Marketplace/desintermediação:** [Gu & Zhu – Management Science](https://pubsonline.informs.org/doi/fpi/10.1287/mnsc.2020.3583) · [Operations Research 2025](https://pubsonline.informs.org/doi/fpi/10.1287/opre.2025.2046) · [Platform Leakage – PKU](https://english.phbs.pku.edu.cn/info/3882/48882.htm) · [HHS working paper](https://research.hhs.se/esploro/outputs/workingPaper/Platform-Disintermediation-with-Repeated-Transactions/991001639497206056)
- **Concorrência e retenção:** [Future review](https://www.sensai.fit/blog/future-app-review-2026) · [FitBudd pricing](https://www.fitbudd.com/insights/how-much-to-charge-for-online-personal-training-complete-pricing-guide) · [Business of Apps](https://businessofapps.com/data/health-fitness-app-benchmarks) · [Braze](https://www.braze.com/blog/mobile-app-retention-10-tip/)

**Limitações desta análise:** vários números de preço vêm de sites comerciais. Não li os textos completos de todos os estudos, e alguns vieram de resumos secundários (indicados). As regras de IOF e IVA mudam com frequência. Tudo o que está marcado como *estimativa* é premissa para testar, não fato.
