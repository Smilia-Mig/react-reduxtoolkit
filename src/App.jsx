import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { avancarFase } from './userSlice';
import './App.css';

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