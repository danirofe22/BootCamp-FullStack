import React, {useState } from "react"

const Marcador = () =>{
    const [local, setLocal]= useState(0)
    const [visitante, setVisitante] = useState(0)

    return(
        <>
            <div>
                <h3>{local}</h3>
                <button onClick={setLocal(local + 1)}>
                    <h4>+ 1</h4>
                </button>
                <button onClick={setLocal(local - 1)}>
                    <h4>- 1</h4>
                </button>
            </div>
        </>
    )
}

export {Marcador}