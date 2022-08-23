import { useState } from "react";

export default function Renderizacao() {
    const [mostrar, setMostar] = useState(false);
    const [respQuiz, setRespQuiz] = useState('');
    const [acertouQuiz, setAcetouQuiz] = useState(false);

    function exibir() {
        setMostar(true);
    }

    function ross(event) {
        if (event.target.checked) {
            setRespQuiz('Não, ele só fala de dinossauro');
            setAcetouQuiz(false);
        }
    }

    function joey(event) {
        if(event.target.checked) {
            setRespQuiz('Acetou! How you doingg');
            setAcetouQuiz(true);
        }
    }

    return(
        <section className="pagina-renderizacao">
            <h1> Renderização Condicional </h1>
            <hr/>

            <div>
                <button onClick={exibir}> Tenho uma pergunta pra você </button>

                {mostrar === true && 
                <h3> Namora Comigo </h3>
                }
            </div>


            <div>
                <h3> Qual é o pesonagem que fala "How you doin" </h3>
                <input type="radio" name="quiz"/> Rachel
                <input type="radio" name="quiz" onChange={ross} /> Ross
                <input type="radio" name="quiz"/> Monica
                <input type="radio" name="quiz"/> Chandler
                <input type="radio" name="quiz" onChange={joey}/> Joey
                <input type="radio" name="quiz"/> Phoebe
            
            <div>
                {respQuiz}
            </div>
            <div>
                {acertouQuiz && 
                <h2>Acertouuuu!!!</h2>
                }
            </div>
           
            </div>

        </section>
    )
}