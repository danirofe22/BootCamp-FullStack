
import ReactDOM from 'react-dom'
import React, {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

/*   setTimeout(
    () => setCounter(counter + 1), 
    10000
  ); */

  const pulsar = () => {
    console.log('pulsado');
  }



  console.log(`rendering... ${counter}`);

  return (
    <>
      {counter}

      <button onClick={(pulsar)}>
        pulsar
      </button>
    </>
  )
}

let counter = 1


  ReactDOM.render(
    <App counter={counter} />, 
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
