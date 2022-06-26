import React from 'react'
import ReactDOM from 'react-dom'

//________________________________________________________VARIABLES

//Valor constante
const x = 5
console.log(x)
//Valor variable
let y = 10
console.log(y)
//________________________________________________________ARRAYS
console.log("__________INTRODUCCION A LOS ARRAYS__________")

const ar = [1,2,3] 

ar.push(10)
console.log("La longitud del array es: " + ar.length)
console.log("El tercer valor es: "+ar[2])

let contador = 1
ar.forEach(value =>{
  console.log(`En el array ar el valor en la posicion ${contador} es: ${value}`)
  contador++
})

//Buena practica para añadir valores a un array
const ar2 = ar.concat(20)

console.log(ar)
console.log(ar2)


//Mapeo de arrays
const m1 = ar.map(value  => `El valor ${value} multiplicado por 10 es igual a: ` + (value *10))

console.log(m1)

//Construir cadenas HTML con el mapeo de arrays
const m2 = ar.map(value => `<li>${value}<li/>`)
console.log(m2)


//Destructuracion de arrays
const t = [1,2,3,4,5]
const [primero, segundo, tercero, ...rest] = t

console.log(primero)
console.log(segundo)
console.log(tercero)
console.log(rest)

//________________________________________________________OBJETOS
console.log("__________INTRODUCCION A LOS OBJETOS__________")

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
console.log("__________INTRODUCCION A LAS FUNCIONES__________")
//FUNCIONES FLECHA

//con mas de un parametro
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const result = sum(1,5)

console.log(`El resultado de la suma es: ${result}`)

//con solo un parametro
const cuadrado = numero => {
  //console.log(numero)
  return numero * numero
}

const resultadoCuadrado = cuadrado(3)
console.log(`El resultado del cuadrado es: ${resultadoCuadrado}`)

//con solo una expresion
const cuadradoEz = numero => numero * numero

console.log(`El resultado del cuadrado es: ${cuadradoEz(10)}`)

const ar3 = [1,2,3]
const ar3AlCuadrado = ar3.map(number => cuadrado(number))
console.log(ar3AlCuadrado)


//REFERANCIAR FUNCIONES

//Nombre en la declaracion de la función
function multiplicacion(a ,b) {
  return a * b
}

const resultadoMultiplicación = multiplicacion(3,4)
console.log(resultadoMultiplicación)


//Expresion de funcion
const calcularMedia = (a, b) => {
  return (a+b) / 2
}
const resultadoMedia = calcularMedia(234, 45)
console.log(resultadoMedia)



const Header = (props) =>{
  console.log(props)
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
  
  const part1 ={
    nombre:'Fundamentos de react',
    ejercicios:10
  } 
  const part2 ={
    nombre:'Usando los props para enviar datos',
    ejercicios:7
  } 
  const part3 ={
    nombre:'El estado de un componente',
    ejercicios:14
  } 

  const totalExercises = part1.ejercicios + part2.ejercicios + part3.ejercicios




  return (
    <div>
      <Header course = {course}/>
      <Content 
        part1 = {part1.nombre} 
        part2 = {part2.nombre} 
        part3 = {part3.nombre} 
        exercises1 = {part1.ejercicios}
        exercises2 = {part2.ejercicios}
        exercises3 = {part3.ejercicios}
      />
      <Total totalExercises = {totalExercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))