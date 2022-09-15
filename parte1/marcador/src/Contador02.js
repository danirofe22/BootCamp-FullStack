import { useState } from "react";
import './Contador02.css'



const Display = ({nombreEquipo, marcador}) => {
    return(
        <div>
            <h1>{nombreEquipo}</h1>
            <h3>{marcador}</h3>
        </div>
    )
}

const Button = ({handleClick, text}) => {
    return(
        <button onClick={handleClick}>{text}</button>
    )
}

const Historial =  ({historialGoles}) => {
    
    const hanMarcado = historialGoles === null

    const mensaje = hanMarcado ? "La app se usa pulsando los botones" : `Historial de goles: ${historialGoles.join(' \n ')}`

    return(
        <p>{mensaje}</p>
    )
}


const Contador02 = () =>{


    const [marcador, setMarcador] = useState(
        {
            local: 0,
            visitante: 0,
            historialGoles: []
        }
    )

    const ganaLocal = marcador.local > marcador.visitante,
          ganaVisitante = marcador.visitante > marcador.local,
          quienGana = ganaLocal ? 'Va ganando el equipo local': ganaVisitante ? 'Va ganando el equipo visitante' : 'Los equipos van empatados'


    const handleLocalAdditionClick = () =>{
        const newMarcador = {
            ...marcador,
            local: marcador.local + 1,
            historialGoles: marcador.historialGoles.concat("Local")
        }
        setMarcador(newMarcador)
    }

    const handleVisitanteAdditionClick = () =>{

        const sumar = {
            ...marcador,
            visitante: marcador.visitante + 1,
            historialGoles: marcador.historialGoles.concat("Visitante")
        }

        setMarcador(sumar)
        
    }

    const handleReiniciarClick = () => {
        const newMarcador = {
            local: 0,
            visitante: 0,
            historialGoles: null
        }
        setMarcador(newMarcador)
    }

    /* const sumarAVisitante = handleVisitanteAdditionClick('+')
    const restarAVisitante = handleVisitanteAdditionClick('-') */
    
    return(
        <>
            <div className="marcadores">
                <div className="marcador">
                    <Display nombreEquipo={"Local"} marcador={marcador.local}/>
                    <Button handleClick={handleLocalAdditionClick} text ={"+1"}/> 
                    
                </div>
                <div className="marcador">
                    <Display nombreEquipo={"Visitante"} marcador={marcador.visitante}/>
                    <Button handleClick={handleVisitanteAdditionClick} text ={"+1"}/> 
                    
                </div>
            </div>
            <p>{quienGana}</p>
            <p>Los goles totales son: {marcador.local + marcador.visitante}</p>
            <p>{quienGana} por diferencia de {Math.abs(marcador.local-marcador.visitante)} goles</p>
            <Historial historialGoles={marcador.historialGoles}></Historial>
            <Button handleClick={handleReiniciarClick} text = {"reiniciar"}/> 
        </>   
    )


}

export default Contador02;