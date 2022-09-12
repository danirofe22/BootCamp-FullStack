import { useState } from 'react';
import './App.css';
const Button = ({handleClick, text}) => {
  return (
    <>
      <button className='btn' onClick={handleClick}>{text}</button>
    </>
  )
}
const App =() => {
  const [local, setLocal] = useState(0)
  const [visitante, setVisitante] = useState(0)

  const reiniciarMarcador = ({local, visitante}) => {
    setLocal(0)
    setVisitante(0)
  }

  const sumarLocal = () => {
    
  }

  return (
    <>
      <div className='marcador'>
        <div className='marcador-individual'>
        <h3>LOCAL</h3>
          <h1>{local}</h1>
          <Button handleClick={() => setLocal(local + 1)} text=" + 1 "></Button>
          <Button handleClick={() => setLocal(local - 1)} text=" - 1 "></Button>
        </div>
        <div className='marcador-division'>
          <h3>VS</h3>
        </div>
        <div className='marcador-individual'>
          <h3>VISITANTE</h3>
          <h1>{visitante}</h1>
          <Button handleClick={() => setVisitante(visitante + 1)} text=" + 1 "></Button>
          <Button handleClick={() => setVisitante(visitante - 1)} text=" - 1 "></Button>
        </div>
        
      </div>
      <div className='btn-reiniciar'>
        <Button handleClick={reiniciarMarcador} text = "Reiniciar Marcador"></Button>
      </div>
    </>
  );
}

export default App;
