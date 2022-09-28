import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App';
import Contador02 from './Contador02';
import Contador02Copy from './Contador02Copy';
import AppEstadistica from './Estadisticas'; */
import Anecdotas from './anecdotas';
import { render } from '@testing-library/react';
import AppEstadistica02 from './Estadisticas02';


const renderizar = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <AppEstadistica02 />
    </React.StrictMode>
  );
}

renderizar();

export default renderizar


