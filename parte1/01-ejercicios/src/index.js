import React from 'react'
import ReactDOM from 'react-dom'

//________________________________________________________VARIABLES

//Valor constante
const x = 5

//Valor variable
let y = 10

//________________________________________________________ARRAYS

const ar = [1,2,3] 

ar.push(10)
console.log(ar.length())
console.log(ar[2])

ar.forEach(value =>{
  console.log(value)
})

//Destructuracion de arrays
const t = [1,2,3,4,5]
const [primero, segundo, tercero, ...rest] = t

/* console.log(primero)
console.log(segundo)
console.log(tercero)
console.log(rest) */

//________________________________________________________OBJETOS
const objeto1 = {
  nombreCompleto: {
    nombre: "daniel",
    apellidos: "Rodriguez Fernandez"
  },
  trabajo: "desarrollador web",
  edad: 19
}


console.log(objeto1.nombreCompleto)
console.log(objeto1.nombreCompleto.apellidos)
console.log(objeto1['edad'])
objeto1.nombreCompleto.nombre = "Ricardinho"
console.log(objeto1.nombreCompleto)
console.log(objeto1.edad + " años")

const campoDeApellidos = 'nombreCompleto'

console.log(objeto1[campoDeApellidos])

objeto1.direccion = 'Rusia'

//Los espacios solo se pueden poner si usamos corchetes
objeto1['constrasena Ultra Secreta'] = 1234

console.log(objeto1['direccion'])
console.log(objeto1.constrasenaUltraSecreta)

//________________________________________________________FUNCIONES

//Funcion Flecha completa
c

const Header = (props) =>{
  
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <>
      <Part part = {props.part1} exercises = {props.exercises1}/>
      <Part part = {props.part2} exercises = {props.exercises2}/>
      <Part part = {props.part3} exercises = {props.exercises3}/>
    </>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return(
    <p>Numero de ejercicios {props.totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack desarrollo de aplicaciones'
  const part1 = 'Fundamentos de react'
  const exercises1 = 10
  const part2 = 'Usando los props para enviar datos'
  const exercises2 = 7
  const part3 = 'El estado de un componente'
  const exercises3 = 14
  const totalExercises = exercises1 + exercises2 + exercises3




  return (
    <div>
      <Header course = {course}/>
      <Content 
        part1 = {part1} 
        part2 = {part2} 
        part3 = {part3} 
        exercises1 = {exercises1}
        exercises2 = {exercises2}
        exercises3 = {exercises3}
      />
      <Total totalExercises = {totalExercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))