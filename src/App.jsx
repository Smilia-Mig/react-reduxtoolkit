import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { avancarFase } from './userSlice';
import './App.css';
import {
  addRegistro,
  carregarTelemetria,
  removeRegistro,
  addSystemLog,
} from './userSlice.js';

// Dentro do seu componente App(), resgate a lista de logs do Redux:
const { list, logs, loading } = useSelector((state) => state.user);

function simularErroSensor() {
  dispatch(addSystemLog('ERROR: Falha de comunicação no barramento CAN - Sensor EMG desconectado!'));
}

// Adicione este trecho JSX ao final do seu <main>:
<section className="logs-panel" style={{ marginTop: '24px', background: '#1e1e1e', color: '#00ff66', padding: '16px', borderRadius: '8px', fontFamily: 'monospace' }}>
  <h3>📊 Monitoramento & Console de Logs em Tempo Real (Semana 21)</h3>
  <button 
    onClick={simularErroSensor} 
    style={{ background: '#ff4d4d', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', marginBottom: '12px' }}
  >
    ⚠️ Simular Erro de Sensor
  </button>
  <div style={{ maxHeight: '150px', overflowY: 'auto', background: '#000', padding: '10px', borderRadius: '4px' }}>
    {logs.map((log, index) => (
      <p key={index} style={{ margin: '4px 0', fontSize: '0.85rem' }}>{log}</p>
    ))}
  </div>
</section>

function App() {
  const { desenvolvedora, area, projetoAtual, fase } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [novaFase, setNovaFase] = useState('');

  const handleRegistro = (e) => {
    e.preventDefault();
    if (novaFase.trim() !== '') {
      dispatch(avancarFase(novaFase));
      setNovaFase('');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Painel P&D — Biomecatrônica</h1>
        <p>Desenvolvimento e Registro de Protocolos Robóticos</p>
      </header>

      {/* Grid com 1 coluna no celular e 2 colunas no computador */}
      <main className="grid-layout">
        <section className="card">
          <h2>Dados do Projeto</h2>
          <br />
          <p><strong>Engenheira:</strong> {desenvolvedora}</p>
          <p><strong>Área:</strong> {area}</p>
          <p><strong>Projeto:</strong> {projetoAtual}</p>
          <p><strong>Fase Atual:</strong> <span style={{ color: '#2563eb', fontWeight: 'bold' }}>{fase}</span></p>
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
            <button type="submit" className="btn-primary">
              Atualizar Estado Global
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;