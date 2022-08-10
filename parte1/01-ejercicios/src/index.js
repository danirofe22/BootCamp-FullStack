import React from 'react'
import ReactDOM from 'react-dom/client'

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
  },
  hacerSuma: function(a, b){
    console.log(`La suma es: ${a+b}`)
  }
}

dani.saludo()

dani.cumpleaños = function(){
  this.age += 1
  console.log(this.age)
}
dani.cumpleaños()

dani.hacerSuma(33,85)

const referenciaAHacerSuma = dani.hacerSuma
referenciaAHacerSuma(33, 54)

setTimeout(dani.saludo(), 1000)

//________________________________________________________ METODOS DE OBJETO Y "THIS"
console.log("__________METODOS DE OBJETO Y THIS__________")
//REFERENCIA POR "THIS"

const vehicle = {
  type: "car",
  model: "ferrari",
  //Creo un metodo dentro del objecto al cual puedo llamar
  print: function() {
    console.log("that is a "+ this.model)
  },
  doAddition: function(a, b){
    console.log(`the result is ${a+b}`)
  }
}
//llamo al metodo
vehicle.print()

//Puedo crear un metodo para el objeto desde fuera del objeto
vehicle.start = function() {
  console.log("the car start up")
}

vehicle.start()

vehicle.doAddition(8,3)

//Cuando hacemos la referencia al metodo perdemos lo que era el this por ello la maquina no conoce a model

//No hace referencia a ninguna propiedad del objeto
const referenceToDoAddition = vehicle.doAddition

referenceToDoAddition(12,6)

//Otro ejemplo de perder el valor de this en la ejecucion
//setTimeout(vehicle.print, 2000)

//La solucion es usar el metodo bind que hace que se conserve el this

setTimeout(vehicle.print.bind(vehicle), 2000)

//No funciona porque el modelo del objeto al que hace referencia la funcion es undefined
/* const referenceToStart = vehicle.print
referenceToStart() */

//________________________________________________________ CLASES
console.log("__________CLASES__________")


class person {
  constructor(name, age){
    this.name = name
    this.age = age
  }
  greet(){
    console.log(`Hello, my name is ${this.name} and i am ${this.age}`)
  }
}

const adam = new person("adam", 33)
adam.greet()

const papu = new person('papu', 23)
papu.greet()


//*******************EJERCICIOS****************** */
console.log("_________________EJERCICIOS_____________________")

const Header = (props) =>{
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}

const Parte = (props) => {
  console.log(`Los props de Part son: ${props}`)
  console.log(props)
  return(
    <p>
      La parte de: {props.nombre}, tiene: {props.ejercicios} ejercicios
    </p>
  )
}

const Content = (props) => {
  console.log(props)
  console.log(`Los props de Content son: ${props.partes[0]['nombre']}`)
  return(
    <>
      <Parte nombre = {props.partes[0].nombre} ejercicios = {props.partes[0].ejercicios}/>
      <Parte nombre = {props.partes[1].nombre} ejercicios = {props.partes[1].ejercicios}/>
      <Parte nombre = {props.partes[2].nombre} ejercicios = {props.partes[2].ejercicios}/>
    </>
  )
}



const Total = (props) => {
  let ejerciciosTotales = 0

  props.partes.forEach(value =>{
    ejerciciosTotales = ejerciciosTotales + value.ejercicios
  })
  return(
    <p>Numero de ejercicios totales: {ejerciciosTotales}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack desarrollo de aplicaciones',
    parts: [
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
  }

  return (
    <div>
      <Header course = {course.name}/>
      <Content partes = {course.parts}/>
      <Total partes = {course.parts}/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)
