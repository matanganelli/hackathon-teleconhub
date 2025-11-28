const express = require("express");
const cors = require("cors");

// Carrega os arquivos JSON
const transacoes = require("./data/transacoes.json");

const app = express();
app.use(cors());
app.use(express.json());

// ===============================
// 1) ROTA: Total de gastos
// ===============================
app.get("/gastos", (req, res) => {
  const total = transacoes.reduce((soma, t) => soma + t.valor, 0);
  res.json({ total: total.toFixed(2) });
});

// ===============================
// 2) ROTA: Extrato completo
// ===============================
app.get("/transacoes", (req, res) => {
  res.json(transacoes);
});

// ===============================
// 3) ROTA: Serviço simulado (Recarga)
// ===============================
app.post("/servicos/recarga", (req, res) => {
  const { numero, valor } = req.body;

  if (!numero || !valor) {
    return res.status(400).json({
      erro: "É necessário enviar 'numero' e 'valor'."
    });
  }

  return res.json({
    sucesso: true,
    mensagem: `Recarga de R$${valor} para o número ${numero} realizada com sucesso!`
  });
});

// ===============================
// 4) ROTA: Serviço simulado (PIX)
// ===============================
app.post("/servicos/pix", (req, res) => {
  const { chave_destino, valor } = req.body;

  if (!chave_destino || !valor) {
    return res.status(400).json({
      erro: "É necessário enviar 'chave_destino' e 'valor'."
    });
  }

  return res.json({
    sucesso: true,
    mensagem: `PIX de R$${valor} enviado para ${chave_destino} com sucesso!`
  });
});

// ===============================
// 5) ROTA: Serviço simulado (Pagamento de Boleto)
// ===============================
app.post("/servicos/pagamento", (req, res) => {
  const { codigo_barras, valor } = req.body;

  if (!codigo_barras || !valor) {
    return res.status(400).json({
      erro: "É necessário enviar 'codigo_barras' e 'valor'."
    });
  }

  return res.json({
    sucesso: true,
    mensagem: `Pagamento de R$${valor} realizado com sucesso para o boleto ${codigo_barras}.`
  });
});

// ===============================
// Servidor rodando
// ===============================
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend rodando em http://localhost:${PORT}`);
});
