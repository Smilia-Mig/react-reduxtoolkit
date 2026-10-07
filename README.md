# 🧬 Painel P&D — Biomecatrônica & Robótica Assistiva

Aplicação web desenvolvida com **React**, **Redux Toolkit** e **Vite** para monitoramento e registro de parâmetros de projetos de pesquisa e desenvolvimento (P&D) em engenharia biomecatrônica (exosqueletos e próteses robóticas).

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **Redux Toolkit**
- **React-Redux**
- **Vite**
- **CSS Grid & Mobile-First**

---

## 🚀 Funcionalidades

- **Gerenciamento de Estado Global com Redux:**
  - Leitura e exibição dos dados de projeto e engenharia em tempo real via `useSelector`.
  - Atualização do status e fases de teste de exosqueletos via `useDispatch`.
- **Formulário de Registro Ativo:**
  - Permite submeter novos status/testes de atuação diretamente para a Store global do Redux sem recarregar a página.
- **Layout Mobile-First Responsivo:**
  - Interface otimizada com **CSS Grid** para adaptação fluida em dispositivos móveis e desktops.

---
---

## 📊 Sistema de Monitoramento & Console de Logs em Tempo Real (Semana 21)

Nesta etapa do projeto, implementamos um middleware customizado no **Redux Toolkit** focado em rastreabilidade, auditoria e debug do fluxo de dados da aplicação em tempo real.

### 🛠️ Funcionalidades Implementadas:
- **Redux Custom Middleware (`loggerMiddleware`)**: Intercepta todas as *actions* disparadas no estado global, registrando automaticamente no console do navegador (`console.group`):
  - O horário exato do evento (`timestamp`);
  - O estado anterior da aplicação (`store.getState()`);
  - Os dados recebidos no `payload`;
  - O novo estado atualizado.
- **Painel de Logs na Interface (UI)**: Exibição visual de logs do sistema em formato *terminal/console* em tempo real.
- **Simulação de Eventos & Telemetria**:
  - Carga assíncrona de dados de telemetria (atuadores e sinais EMG);
  - Botão de **Simulação de Erros de Sensores** (ex: falhas no barramento CAN).

---

## 📂 Estrutura do Projeto

```text
src/
├── store.js       # Configuração da Store principal do Redux
├── userSlice.js   # Fatia do estado contendo reducers e ações do projeto
├── App.jsx        # Componente principal conectado ao Redux e formulário
├── main.jsx       # Envelopamento da aplicação com o Provider do Redux
└── App.css        # Estilização responsiva (Mobile-First + CSS Grid)
```

---

## 🔧 Como rodar

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   ```

2. **Entrar na pasta do projeto:**
   ```bash
   cd react+reduxtoolkit
   ```

3. **Instalar as dependências:**
   ```bash
   npm install
   ```

4. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acessar no navegador:**
   `http://localhost:5173`

---

Desenvolvido por SmiliaMig
