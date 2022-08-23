import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';


import App from './pages/App/App';
import Tarefas from './pages/Tarefas';
import Renderizacao from './pages/Renderizacao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Renderizacao/>
    <Tarefas/>
    <App/>
  </React.StrictMode>
);



