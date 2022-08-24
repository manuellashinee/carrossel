import './index.scss'

export default function LinhaMagica() {


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
                                <button className='previous'><i class="fa-solid fa-angles-left"></i></button>
                                <button className='next'><i class="fa-solid fa-angles-right"></i></button>

                            </div>
                        </div>
                        <div className='my-slider'>
                            <div className='slide'>
                               <div className='slide-img img-1'></div> 
                            </div>    
                         </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}