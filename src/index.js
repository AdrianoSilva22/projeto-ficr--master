import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import RegisterEvent from './pages/RegisterEvents';
import { ListagemEventos } from './pages/listagemEvents';
import UpdateEvents from './pages/updateEvents';
import EventDetailsPage from './pages/EventDetails';
import ListNumber from './components/ListNumber';
import RegisterNumber from './pages/RegisterNumber';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registerEvent" element={<RegisterEvent />} />
        <Route path="/listagemEvents" element={<ListagemEventos />} />
        <Route path="/eventDetails" element={<EventDetailsPage />} />
        <Route path="/update-event" element={<UpdateEvents />} />
        <Route path="/listagemNumeros" element={<ListNumber />} />
        <Route path="/numeroRegister" element={<RegisterNumber />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
