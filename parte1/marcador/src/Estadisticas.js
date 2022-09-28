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
const Estadisticas = ({estadisticas}) => {
    

    const votosTotales = estadisticas.good + estadisticas.neutral + estadisticas.bad
    
    const average = (votosTotales !== 0) ? (estadisticas.good - estadisticas.bad) / votosTotales : 0

    const porcentajePositivos = ((estadisticas.good / votosTotales) * 100) + "%"

    


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
                <Estadistica votos = {estadisticas.good} text={"Bueno => "}></Estadistica>
                <Estadistica votos = {estadisticas.neutral} text={"Neutral => "}></Estadistica>
                <Estadistica votos = {estadisticas.bad} text={"Malo => "}></Estadistica>
                <Estadistica votos = {votosTotales} text={"Votos Totales => "}></Estadistica>
                <Estadistica votos = {average} text={"Media => "}></Estadistica>
                <Estadistica votos = {porcentajePositivos} text={"Positivos => "}></Estadistica>
            </tbody>
            
        </table>

    )
}

const AppEstadistica = () => {

    const [estadisticas, setEstadisticas] = useState(
        {
            good: 0,
            neutral: 0, 
            bad: 0,
            
        }
    )

    const votarGood = {
        ...estadisticas,
        good: estadisticas.good + 1
    }

    const votarNeutral = {
        ...estadisticas,
        neutral: estadisticas.neutral + 1
    }


    const votarBad = {
        ...estadisticas,
        bad: estadisticas.bad + 1
    }

    const reiniciar = {
        good: 0,
        neutral: 0, 
        bad: 0,
    }


    const handleClickVotar = (action) => {
        const votar = () => {
            setEstadisticas(action)
        }

        return votar
    }

    
    
    
    

    
    return(
        <>
            <h1>Cuentanos tu opinion</h1>
            <Button handleClick={handleClickVotar(votarGood)} text = {"Bueno"}></Button>
            <Button handleClick={handleClickVotar(votarNeutral)} text = {"Neutral"}></Button>
            <Button handleClick={handleClickVotar(votarBad)} text = {"Malo"}></Button>

            
            <Estadisticas estadisticas = {estadisticas}></Estadisticas>
            <h4><Button handleClick={handleClickVotar(reiniciar)} text = {"REINICIAR"}></Button></h4>
        </>
    )

}

export default AppEstadistica