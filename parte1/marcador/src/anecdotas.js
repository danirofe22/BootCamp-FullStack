import React, { useState } from 'react'


//Componente para representar un boton con un text y un handle click
const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const BetterAnecdote = ({valoraciones, anecdotes}) => {

  let mejorAnecdota = 0

  for (let i = 0; i < valoraciones.length; i++) {
    const element = valoraciones[i];
    if (element > mejorAnecdota ) {
      mejorAnecdota = valoraciones.indexOf(element)
    }
  }

  return(
    <>
      <h3>Best Anecdote</h3>

      <h5><em><q>{anecdotes[mejorAnecdota]}</q></em></h5>
    </>
  )
}


const Anecdotas = () => {

  const [valoraciones, setVal] = useState([0,0,0,0,0,0])

  const [selected, setSelected] = useState(1)

  

  

  
  const handleClickAnecdotaAleatoria = () => {
    const valor = Math.floor((Math.random() * anecdotes.length))
    setSelected(valor)
  }

  const handleClickVotar = () => {
    let copiaValoraciones = valoraciones
    copiaValoraciones[selected] = copiaValoraciones[selected] + 1
    setVal(copiaValoraciones)
    console.log(valoraciones[selected]);
  }


  


  return (
    <div>
      <p><em><q>{anecdotes[selected]}</q></em></p>
      <Button handleClick={handleClickAnecdotaAleatoria} text = {"siguiente anecdota"}></Button>
      <Button handleClick={handleClickVotar} text = {"Me gusta!"}></Button>
      <small>  Valoraciones: {valoraciones[selected]}</small>
      <BetterAnecdote valoraciones={valoraciones} anecdotes={anecdotes}></BetterAnecdote>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


export default Anecdotas