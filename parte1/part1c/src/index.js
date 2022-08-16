import React from 'react'
import ReactDOM from 'react-dom'


const Hello = ({name, age})  => {
  
  const bornYear = () => new Date().getFullYear() - age
  
  return(
    <>
      <p>
        Hola mi nombre es {name}, y tengo {age} años
      </p>
      <p>
        Seguramente hayas nacido en el año {bornYear()}
      </p>
    </>
  )
}




const App = () => {
  const now = new Date()
  const a = 10
  const b  = 20
  const name = "ricardinho"
  const age = 32 
  return (
    <div>
      <Hello name = "joselito" age = "12"/>
      <Hello name = {name} age = {age}/>
      <p>Hola mundo! Hoy es: {now.toDateString()}</p>
      <p>Suma: {a} + {b} = {a+b}</p>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root')) 
