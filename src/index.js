import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import App from './pages/App/App';
import Tarefas from './pages/Tarefas';
import Renderizacao from './pages/Renderizacao';
import SituacaoAluno from './pages/SituacaoAluno';
import LinhaMagica from './pages/multi1';
import Multi2 from './pages/multi2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Multi2/>
   
  </React.StrictMode>
);



