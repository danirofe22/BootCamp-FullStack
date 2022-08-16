import React from 'react'
import ReactDOM from 'react-dom'


const Hello = (props)  => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return(
    <>
      <p>
        Hola mi nombre es {props.name}, y tengo {props.age} años
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
