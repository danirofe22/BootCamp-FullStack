
import ReactDOM from 'react-dom'
import React, {useState} from 'react'

const Contador = ({contador}) => <h1>{contador}</h1>

const Boton = ({action, text}) => {
  return(
    <>
      <button onClick={action}>
        {text}
      </button>
    </>
  )
}


const App = () => {
  const [counter, setCounter] = useState(0)

  const incrementar  = () => setCounter(counter +1);
  const restablecer = () => setCounter(0);
  const restar = () => setCounter(counter - 1)

  return (
    <>
      <Contador contador = {counter}/>
      <Boton 
        action = {incrementar} 
        text = "incrementar"
      />
      
      <Boton 
        action = {restablecer} 
        text = "restablecer"
      />

      <Boton 
        action={restar} 
        text= "restar"
      />
      
    </>
  )
}




  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  ) 

/*counter += 1 
refresh()
counter += 1 
refresh()


setInterval(()=>{
  refresh()
  counter += 1
},1000) */
