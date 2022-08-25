import { tns } from 'tiny-slider'
import './index.scss'

export default function LinhaMagica() {
    let slider = tns({
        container : ".my-slider",
        "slideBy": 1,
        "speed":400,
        "nav": false,
        controlsContainer:".controls",
        prevButton : ".previous",
        nextButton : ".next",
        responsive : {
            1240 : {
                items : 3,
                gutter: 20
            }
        }
    })

    return(
        <section id ="slider">
            <div className='container'>
                <div className='subcontainer'>
                    <div className='slider-wrapper'>
                        <div className='controller'>
                            <div>
                                <h3>OS MELHORES PREÇOS</h3>
                                <h1>
                                    VOCÊ ENCONTRA AQUI 
                                </h1>
                            </div>
                            <div id='controls'>
                                <button className='previous'><i className='fa-solid fa-angles-left'></i></button>
                                <button className='next'><i className='fa-solid fa-angles-right'></i></button>

                            </div>
                        </div>
                        <div className='my-slider'>
                         <div>
                           <div className='slide'>
                               <div className='slide-img img-1'></div> 
                            </div>
                         </div>   
                         <div>
                           <div className='slide'>
                               <div className='slide-img img-2'></div> 
                            </div>
                         </div>   
                         <div>
                           <div className='slide'>
                               <div className='slide-img img-3'></div> 
                            </div>
                         </div>    
                         </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}