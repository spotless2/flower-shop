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
                            <p>Far far away, behind the word mountains, far from the countries Vokalia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
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
