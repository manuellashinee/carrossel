import { useEffect, useState } from "react";

export default function SituacaoAluno() {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);
    const [media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState('');

    function calcular() {
        let x = (n1+ n2 + n3)/3;
        setMedia(x)
    }

    useEffect(() => {
        calcular()
    },[n1,n2,n3])

    function verificacao() {
        if(media < 0 || media > 10) {
            setSituacao('Média inválida!')
        }

        else if(media >= 5) {
            setSituacao('Aluno passou!')
        }

        else if(media >= 3 && media < 5) {
            setSituacao('Aluno de Recuperação!!!')
        }

        else {
            setSituacao('BOMBOUU, se fodeu!!!')
        }
    }

    useEffect(() => {
        verificacao();
    }, [media])

    return(
        <section>
                 <h1> Situação do Aluno</h1>
            <div>
                <div className="notas">
                    <div>
                        Nota 1: <input type="number" value={n1} onChange={e => setN1(Number(e.target.value))}/>
                    </div>
                    <div>
                        Nota 2: <input type="number" value={n2} onChange={e => setN2(Number(e.target.value))}/>
                    </div>
                    <div>
                        Nota 3: <input type="number" value={n2} onChange={e => setN3(Number(e.target.value))}/>
                    </div>
                </div>
                <div>
                    Media: <input type="number" value={media} onChange={e => setMedia(Number(e.target.value))} />
                </div>

                <div>
                    {situacao}
                </div>
                
            </div>
        </section>
    )



}