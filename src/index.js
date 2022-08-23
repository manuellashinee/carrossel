import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import App from './pages/App/App';
import Tarefas from './pages/Tarefas';
import Renderizacao from './pages/Renderizacao';
import SituacaoAluno from './pages/SituacaoAluno';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SituacaoAluno/>
    <Renderizacao/>
    <Tarefas/>
    <App/>
   
  </React.StrictMode>
);



