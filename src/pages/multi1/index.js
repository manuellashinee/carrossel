import {useEffect} from 'react'
import './index.scss'

export default function LinhaMagica() {
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

    return(
        <section className='LinhaM'>
        <section className="product"> 
        <h2 className="product-category">OS MELHORES PREÇOS VOCÊ ENCONTRA AQUI</h2>
        <h1 className="product-category"></h1>
        <button className="pre-btn"><img className='lana' src="../images/arrow.png" alt=""/></button>
        <button className="nxt-btn"><img className='lana' src="../images/arrow.png" alt=""/></button>
        <div className="product-container">
            <div className="product-card">
                <div className="product-image">
                    
                    <img src="../images/buzz.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                   
                    <img src="../images/mundo.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    
                    <img src="../images/raya.webp" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <img src="../images/red.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <img src="../images/red.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <img src="../images/red.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <img src="../images/red.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <img src="../images/red.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <img src="../images/red.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
            <div className="product-card">
                <div className="product-image">
                    <img src="../images/red.jpg" className="product-thumb" alt=""/>
                </div>
                <div className="product-info">
                    <h2 className="product-brand">brand</h2>
                    <span className="price">$20</span>
                </div>
            </div>
        </div>
    </section>
    </section>
    )
}