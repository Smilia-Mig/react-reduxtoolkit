import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  desenvolvedora: 'Beatriz',
  area: 'Biomechatronics / Deep Tech Engineer',
  projetoAtual: 'Exosqueleto Assistivo',
  fase: 'Modelagem 3D & Controle Robótico',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    avancarFase: (state, action) => {
      state.fase = action.payload;
    },
  },
});

export const { avancarFase } = userSlice.actions;
export default userSlice.reducer;