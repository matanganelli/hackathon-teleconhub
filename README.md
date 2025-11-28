# Hub Financeiro Móvel – Projeto Hackathon FMU + aiiaLabs

Projeto do hackathon: um hub financeiro móvel que integra controle de gastos, extrato inteligente, transações (entradas e saídas), e interface web leve — com frontend e backend separados.

## 📄 Visão geral

Este repositório contém a versão estruturada do projeto “Hub Financeiro Móvel”:

- **frontend/** — interface web: HTML, CSS, JS, responsivo para desktop e celular.  
- **backend/** — servidor Node.js + banco de dados (ou mock JSON), lógica das transações e APIs.  

O objetivo é oferecer uma plataforma simples para cadastrar transações (gastos / entradas), visualizar saldo, histórico, categorias automáticas e previsões financeiras.

## 🚀 Funcionalidades

- Dashboard com saldo atual e lista de transações.  
- Categorias automáticas para despesas/receitas (Alimentação, Transporte, Serviços, Renda, Outros).  
- Ações rápidas: entradas fixas, gastos rápidos (Uber, Mercado, etc), pagamento de boleto, recarga de celular.  
- Armazenamento local / backend para persistência dos dados.  
- Previsão de quando o saldo acaba baseado nos gastos médios.  
- Layout responsivo (desktop e mobile).  

## 🧰 Tecnologias usadas

- Frontend: HTML, CSS, JavaScript (vanilla).  
- Backend: Node.js + Express (ou JSON “fake” para dados).  
- Persistência: JSON ou banco de dados (dependendo da configuração).  
- Controle de versão e colaboração: Git + GitHub.

## 🔧 Como rodar o projeto localmente

### 1. Clone o repositório  
git clone https://github.com/matanganelli/hackathon-teleconhub.git
cd hackathon-teleconhub

1. Instalar Dependências
Primeiro, navegue até a pasta do backend e instale os módulos necessários:

cd backend
npm install

2. Iniciar o Servidor
Após a instalação, inicie o servidor em modo de desenvolvimento (dev):

npm run dev

Se tudo ocorrer bem, o terminal deverá exibir a confirmação e o servidor estará pronto para se comunicar com o frontend:

🚀 Servidor backend rodando em http://localhost:4000
