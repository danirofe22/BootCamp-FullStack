import { useState } from "react";

//Componente para representar un boton con un text y un handle click
const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

//Componente para mostrar una estadistica
const Estadistica = ({votos, text}) => {
    
    return(
        //Muestra la estadistica en un fila para la tabla final
        <tr>
            <th><strong>{text}</strong></th>
            <th>{votos}</th> 
        </tr>
    )
}

//componente que muestra un conjunto de estadisticas en una tabla 
const Estadisticas = ({bad, neutral, good}) => {
    
    const votosTotales = good + neutral + bad
    
    const average = (votosTotales !== 0) ? (good - bad) / votosTotales : 0

    const porcentajePositivos = ((good / votosTotales) * 100) + "%"

    if (votosTotales === 0) {
        return (
            <p>No se ha dado el feedback para poder mostrar la estadistica</p>
        )
    }

    return(
        <table>

            <thead>
                <tr>
                    <th><h2>Estadisticas</h2></th>
                </tr>
                
            </thead>
            <tbody>
                <Estadistica votos = {good} text={"Bueno => "}></Estadistica>
                <Estadistica votos = {neutral} text={"Neutral => "}></Estadistica>
                <Estadistica votos = {bad} text={"Malo => "}></Estadistica>
                <Estadistica votos = {votosTotales} text={"Votos Totales => "}></Estadistica>
                <Estadistica votos = {average} text={"Media => "}></Estadistica>
                <Estadistica votos = {porcentajePositivos} text={"Positivos => "}></Estadistica>
            </tbody>
            
        </table>

    )
}

const AppEstadistica02 = () => {

    const [good, setGood] = useState(0)

    const [neutral, setNeutral] = useState(0)

    const [bad, setBad] = useState(0)

    
    const setGoodToValue = (newGoodValue) => {
        setGood(newGoodValue)
    }

    const setNeutralToValue = (newNeutralValue) => {
        setNeutral(newNeutralValue)
    }

    const setBadToValue = (newBadValue) => {
        setBad(newBadValue)
    }

    const reiniciar = () =>{
        setGood(0)
        setNeutral(0)
        setBad(0)
    }

    return(
        <>
            <h1>Cuentanos tu opinion</h1>
            <Button handleClick={() => setGoodToValue(good + 1)} text = {"Bueno"}></Button>
            <Button handleClick={() => setNeutralToValue(neutral + 1)} text = {"Neutral"}></Button>
            <Button handleClick={() => setBadToValue(bad + 1)} text = {"Malo"}></Button>

            
            <Estadisticas bad={bad} neutral={neutral} good = {good}></Estadisticas>
            <h4><Button handleClick={reiniciar} text = {"REINICIAR"}></Button></h4>
        </>
    )

}

export default AppEstadistica02