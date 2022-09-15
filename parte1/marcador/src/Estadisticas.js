import { useState } from "react";

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Estadistica = ({votos, text}) => {
    
    return(
        <tr>
            <th><strong>{text}</strong></th>
            <th>{votos}</th> 
        </tr>
    )
}

const Estadisticas = ({estadisticas, votosTotales, average}) => {
    if (votosTotales == 0) {
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

    const votosTotales = estadisticas.good + estadisticas.neutral + estadisticas.bad
    
    let average = 0

    if(votosTotales != 0){
        average = (estadisticas.good - estadisticas.bad) / votosTotales
    }
    
    

    
    return(
        <>
            <h1>Cuentanos tu opinion</h1>
            <Button handleClick={handleClickVotar(votarGood)} text = {"Bueno"}></Button>
            <Button handleClick={handleClickVotar(votarNeutral)} text = {"Neutral"}></Button>
            <Button handleClick={handleClickVotar(votarBad)} text = {"Malo"}></Button>

            
            <Estadisticas estadisticas = {estadisticas} votosTotales = {votosTotales} average = {average}></Estadisticas>
            <h4><Button handleClick={handleClickVotar(reiniciar)} text = {"REINICIAR"}></Button></h4>
        </>
    )

}

export default AppEstadistica