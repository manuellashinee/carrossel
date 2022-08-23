import './index.scss'
import { useState } from "react";

export default function Calculadora(props) {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resp, setResp] = useState(0);

    function somar() {
        let x =  n1 + n2;
        setResp = (x);
    }

    return (
        <section className='comp-calculadora'>
            <h1> Calculadora </h1>

            <div> 
                Número 1: <input type="number" value={n1} onChange={e => setN1(Number(e.target.value))}/>
            </div>

            <div> 
                Número 2: <input type="number" value={n2} onChange={e => setN2(Number(e.target.value))}/>
            </div>

            <div> {resp} </div>

            <div>
                <button onClick={somar}> Somar </button>
            </div>
            
        </section>
    )

}