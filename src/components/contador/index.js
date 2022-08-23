import './index.scss'
import { useState } from "react";

export default function Contador(props) {
    const [cont, setCount] = useState(props.inicio);


    function add() {
        setCount(cont + 1);
    }

    return(
        <section className='comp-contador'>
            <h1> {props.titulo} </h1>

            <div> {cont} </div>

            <button onClick={add}> Adicionar </button>
        </section>
    )
}