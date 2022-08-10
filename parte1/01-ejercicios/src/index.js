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

const dani = {
  nombre: 'dani',
  age: 35,
  education: 'developer',
  saludo: function () {
    console.log(`Hola mi nombre es ${this.nombre}`)
  } 
}

dani.saludo()



//*******************EJERCICIOS****************** */
console.log("_________________EJERCICIOS_____________________")

const Header = (props) =>{
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  console.log(`Los props de Content son: ${props.partes[0]['nombre']}`)
  return(
    <>
      <Part nombre = {props.partes[0]['nombre']} ejercicios = {props.partes[0]['ejercicios']}/>
      <Part nombre = {props.partes[1]['nombre']} ejercicios = {props.partes[1]['ejercicios']}/>
      <Part nombre = {props.partes[2]['nombre']} ejercicios = {props.partes[2]['ejercicios']}/>
    </>
  )
}

const Part = (props) => {
  console.log(`Los props de Part son: ${props}`)
  console.log(props)
  return(
    <p>
      La parte de: {props.nombre}, tiene: {props.ejercicios} ejercicios
    </p>
  )
}

const Total = (props) => {
  return(
    <p>Numero de ejercicios totales: {props.totalExercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack desarrollo de aplicaciones'
  
  const parts =[
  {
    nombre:'Fundamentos de react',
    ejercicios:10
  }, 
  {
    nombre:'Usando los props para enviar datos',
    ejercicios:7
  },
  {
    nombre:'El estado de un componente',
    ejercicios:14
  }]

  let ejerciciosTotales = 0

  parts.forEach(value =>{
    ejerciciosTotales = ejerciciosTotales + value.ejercicios
    console.log(ejerciciosTotales)
  })

  console.log(`EJERCICIOS TOTALES:   ${ejerciciosTotales}`)


console.log("holooooddd")

  return (
    <div>
      <Header course = {course}/>
      <Content partes = {parts}/>
      <Total totalExercises = {ejerciciosTotales}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))