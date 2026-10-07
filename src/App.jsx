import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {
  addRegistro,
  carregarTelemetria,
  removeRegistro,
  addSystemLog,
  avancarFase,
} from './userSlice.js';

function App() {
  // 1. Hooks do Redux e Estados (devem ficar DENTRO da função App)
  const dispatch = useDispatch();
  
  // Resgatando dados do estado global
  const { 
    desenvolvedora, 
    area, 
    projetoAtual, 
    fase, 
    list = [], 
    logs = [], 
    loading = false 
  } = useSelector((state) => state.user);

  const [novaFase, setNovaFase] = useState('');

  // 2. Funções de manipulação
  const handleRegistro = (e) => {
    e.preventDefault();
    if (novaFase.trim() !== '') {
      dispatch(avancarFase(novaFase));
      dispatch(addRegistro({ id: Date.now(), title: novaFase, status: 'Ativo' }));
      setNovaFase('');
    }
  };

  function simularErroSensor() {
    dispatch(
      addSystemLog('ERROR: Falha de comunicação no barramento CAN - Sensor EMG desconectado!')
    );
  }

  // 3. Renderização visual (JSX)
  return (
    <div className="container">
      <header>
        <h1>Painel P&D — Biomecatrônica</h1>
        <p>Desenvolvimento e Registro de Protocolos Robóticos</p>
      </header>

      {/* Grid responsivo */}
      <main className="grid-layout">
        <section className="card">
          <h2>Dados do Projeto</h2>
          <br />
          <p><strong>Engenheira:</strong> {desenvolvedora || 'Ana Beatriz'}</p>
          <p><strong>Área:</strong> {area || 'Biomecatrônica'}</p>
          <p><strong>Projeto:</strong> {projetoAtual || 'Exosqueleto Assistivo'}</p>
          <p>
            <strong>Fase Atual:</strong>{' '}
            <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{fase || 'Testes Iniciais'}</span>
          </p>
        </section>

        <section className="card">
          <h2>Atualizar Registro no Redux</h2>
          <br />
          <form onSubmit={handleRegistro}>
            <label htmlFor="faseInput"><strong>Novo Status / Teste:</strong></label>
            <input 
              id="faseInput"
              type="text" 
              className="input-field"
              value={novaFase}
              onChange={(e) => setNovaFase(e.target.value)}
              placeholder="Ex: Teste do atuador de articulação..."
            />
            <button type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
              Atualizar Estado Global
            </button>
          </form>

          <button 
            onClick={() => dispatch(carregarTelemetria())} 
            disabled={loading}
            className="btn-primary"
            style={{ marginTop: '12px', background: '#059669' }}
          >
            {loading ? 'Carregando Telemetria...' : '📥 Carregar Dados P&D'}
          </button>
        </section>
      </main>

      {/* Painel de Monitoramento e Logs da Semana 21 */}
      <section 
        className="logs-panel" 
        style={{ 
          marginTop: '24px', 
          background: '#1e1e1e', 
          color: '#00ff66', 
          padding: '16px', 
          borderRadius: '8px', 
          fontFamily: 'monospace' 
        }}
      >
        <h3>📊 Monitoramento & Console de Logs em Tempo Real (Semana 21)</h3>
        <button 
          onClick={simularErroSensor} 
          style={{ 
            background: '#ff4d4d', 
            color: '#fff', 
            border: 'none', 
            padding: '6px 12px', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            marginBottom: '12px',
            marginTop: '8px'
          }}
        >
          ⚠️ Simular Erro de Sensor
        </button>

        <div style={{ maxHeight: '150px', overflowY: 'auto', background: '#000', padding: '10px', borderRadius: '4px' }}>
          {logs && logs.length > 0 ? (
            logs.map((log, index) => (
              <p key={index} style={{ margin: '4px 0', fontSize: '0.85rem' }}>{log}</p>
            ))
          ) : (
            <p style={{ margin: '4px 0', fontSize: '0.85rem', color: '#888' }}>Aguardando eventos do sistema...</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;