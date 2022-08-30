import './index.scss'

export default function MultiSlider() {
    return(
        <div className='slide-container'>
            <span className='slider-span' id='slider-span1'></span>
            <span className='slider-span' id='slider-span2'></span>
            <span className='slider-span' id='slider-span3'></span>
            <span className='slider-span' id='slider-span4'></span>
            <span className='slider-span' id='slider-span5'></span>
            <span className='slider-span' id='slider-span6'></span>
            <span className='slider-span' id='slider-span7'></span>

            <div className='image-slider'>
                <div className='slides-div' id='slide-1'>
                    <img src="../images/buzz.jpg" id='img1'/>
                    <a href='#slider-span1' className='button' id='button-1'></a>
                </div>
                <div className='slides-div' id='slide-2'>
                    <img src="../images/" id='img2'/>
                    <a href='#slider-span1' className='button' id='button-2'></a>
                </div>
                <div className='slides-div' id='slide-3'>
                    <img src="../images/buzz.jpg" id='img3'/>
                    <a href='#slider-span1' className='button' id='button-3'></a>
                </div>
                <div className='slides-div' id='slide-4'>
                    <img src="../images/buzz.jpg" id='img4'/>
                    <a href='#slider-span1' className='button' id='button-4'></a>
                </div>
                <div className='slides-div' id='slide-5'>
                    <img src="../images/buzz.jpg" id='img5'/>
                    <a href='#slider-span1' className='button' id='button-5'></a>
                </div>
                <div className='slides-div' id='slide-6'>
                    <img src="../images/buzz.jpg" id='img6'/>
                    <a href='#slider-span1' className='button' id='button-6'></a>
                </div>
                <div className='slides-div' id='slide-7'>
                    <img src="../images/buzz.jpg" id='img7'/>
                    <a href='#slider-span1' className='button' id='button-7'></a>
                </div>
            </div>

        </div>
    )
}