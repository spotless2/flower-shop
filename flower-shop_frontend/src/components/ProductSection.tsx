import React from 'react';
import OwlCarousel from 'react-owl-carousel';


class ProductSection extends React.Component {
    render() {
        return (
            <div id="fh5co-product-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                            <h3>Products</h3>
                            <p>Descoperă colecția noastră de flori proaspete și buchete artizanale, create cu grijă și pasiune. De la trandafiri eleganți la flori exotice, fiecare buchet este o poveste de frumusețe și emoție. Alege RDM pentru a aduce un strop de natură în viața ta!</p>
                        </div>
                    </div>
                    <OwlCarousel className="owl-carousel2" nav autoplay animateIn loop items={3} margin={10}>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-1.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-2.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-3.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-4.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-1.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-2.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-3.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-4.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-1.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-2.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-3.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-4.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-1.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-2.jpg'} alt="image"/></a></div>
                        <div className="item animate-box"><a className="image-popup"><img src={'assets/images/product-3.jpg'} alt="image"/></a></div>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default ProductSection;
