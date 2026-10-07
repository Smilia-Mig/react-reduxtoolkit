import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  desenvolvedora: 'Ana Beatriz de Moraes',
  area: 'Biomecatrônica',
  projetoAtual: 'Exosqueleto / Perna Robótica Assistiva',
  fase: 'Testes Iniciais de Junta',
  list: [],
  logs: [
    `[${new Date().toLocaleTimeString('pt-BR')}] INFO: Sistema de Monitoramento P&D Inicializado.`
  ],
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    avancarFase: (state, action) => {
      state.fase = action.payload;
      state.logs.unshift(
        `[${new Date().toLocaleTimeString('pt-BR')}] ACTION: Fase atualizada para -> "${action.payload}"`
      );
    },
    addRegistro: (state, action) => {
      state.list.push(action.payload);
      state.logs.unshift(
        `[${new Date().toLocaleTimeString('pt-BR')}] ACTION: Registro adicionado -> "${action.payload.title}"`
      );
    },
    removeRegistro: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      state.logs.unshift(
        `[${new Date().toLocaleTimeString('pt-BR')}] WARN: Registro removido -> ID ${action.payload}`
      );
    },
    setRegistros: (state, action) => {
      state.list = action.payload;
      state.logs.unshift(
        `[${new Date().toLocaleTimeString('pt-BR')}] SUCCESS: Telemetria recarregada (${action.payload.length} itens).`
      );
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addSystemLog: (state, action) => {
      state.logs.unshift(
        `[${new Date().toLocaleTimeString('pt-BR')}] ${action.payload}`
      );
    }
  },
});

export const {
  avancarFase,
  addRegistro,
  removeRegistro,
  setRegistros,
  setLoading,
  addSystemLog,
} = userSlice.actions;

export const carregarTelemetria = () => async (dispatch) => {
  dispatch(setLoading(true));
  dispatch(addSystemLog('INFO: Solicitando carga de dados remotos de telemetria...'));

  await new Promise((resolve) => setTimeout(resolve, 1000));

  dispatch(
    setRegistros([
      {
        id: 1,
        title: 'Calibração do Atuador Harmônico - Joelho Direito',
        status: 'Suporte 45 Nm - Concluído',
      },
      {
        id: 2,
        title: 'Mapeamento de Sinais Mioelétricos (EMG) - Quadríceps',
        status: 'Sinal Estável - Em Análise',
      },
    ])
  );

  dispatch(setLoading(false));
};

export default userSlice.reducer;