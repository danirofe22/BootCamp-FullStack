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

const Button = ({handleClick, text}) => (
        <button onClick={handleClick}>{text}</button>
    )


const Historial =  ({historialGoles}) => {
    
    console.log(historialGoles);

    const hanMarcado = historialGoles.length == 0

    const mensaje = hanMarcado ? "La app se usa pulsando los botones" : `Historial de goles: ${historialGoles.join(' \n ')}`  

    return(
        <p>{mensaje}</p>
    )
}


const Contador02Copy = () => {


    //Estado de la aplicacion
    const [marcador, setMarcador] = useState(
        {
            local: 0,
            visitante: 0,
            historialGoles: []
        }
    )

    //Informacion de quien va ganando (Comprobado con un condicional)
    const ganaLocal = marcador.local > marcador.visitante,
          ganaVisitante = marcador.visitante > marcador.local,
          quienGana = ganaLocal ? 'Va ganando el equipo local': ganaVisitante ? 'Va ganando el equipo visitante' : 'Los equipos van empatados'


    
    //Posibles cambios del estado
    const sumaLocal = {
        ...marcador,
        local: marcador.local + 1,
        historialGoles: marcador.historialGoles.concat("Local")
    }

    const restaLocal = {
        ...marcador,
        local: marcador.local - 1,
        historialGoles: marcador.historialGoles.concat("Local - 1")
    }

    const sumaVisitante = {
        ...marcador,
        visitante: marcador.visitante + 1,
        historialGoles: marcador.historialGoles.concat("Visitante")
    }

    const restaVisitante = {
        ...marcador,
        visitante: marcador.visitante - 1,
        historialGoles: marcador.historialGoles.concat("Visitante - 1")
    }

    const handleClickMarcador = (operacion) => () => {
        setMarcador(operacion)
    }

    const handleReiniciarClick = () => {
        const newMarcador = {
            local: 0,
            visitante: 0,
            historialGoles: []
        }
        setMarcador(newMarcador)
    }
 
    return(
        <>
            <div className="marcadores">
                <div className="marcador">
                    <Display nombreEquipo={"Local"} marcador={marcador.local}/>
                    <Button handleClick={handleClickMarcador(sumaLocal)} text ={"+1"}/> 
                    <Button handleClick={handleClickMarcador(restaLocal)} text ={"-1"}/> 
                    
                </div>
                <div className="marcador">
                    <Display nombreEquipo={"Visitante"} marcador={marcador.visitante}/>
                    <Button handleClick={handleClickMarcador(sumaVisitante)} text ={"+1"}/> 
                    <Button handleClick={handleClickMarcador(restaVisitante)} text ={"-1"}/> 
                    
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

export default Contador02Copy;