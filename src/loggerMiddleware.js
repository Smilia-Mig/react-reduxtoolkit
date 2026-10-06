// Middleware customizado para monitoramento e logging de auditoria
export const loggerMiddleware = (store) => (next) => (action) => {
  const timestamp = new Date().toLocaleTimeString('pt-BR');
  
  console.group(`[LOG P&D - ${timestamp}] Action: ${action.type}`);
  console.log('Estado Anterior:', store.getState());
  console.log('Payload/Dados:', action.payload);
  
  const result = next(action);
  
  console.log('Estado Atualizado:', store.getState());
  console.groupEnd();

  return result;
};