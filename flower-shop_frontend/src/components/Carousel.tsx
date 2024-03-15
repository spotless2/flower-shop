import React from 'react';
import OwlCarousel from 'react-owl-carousel';
// import './css/bootstrap.css'
//
// import './css/animate.css'
// import './css/icomoon.css'
// import './css/owl.carousel.min.css'
// import './css/owl.theme.default.min.css'
// import './css/style.css'





class Carousel extends React.Component {
   render() {
    return (
        <>
        <OwlCarousel nav autoplay animateIn loop items={1}>
			    <div className="item"><a className="image-popup"><img src={'assets/images/img_large_1.jpg'} alt="image"/></a></div>
			    <div className="item"><a className="image-popup"><img src={'assets/images/img_large_2.jpg'} alt="image"/></a></div>
			    <div className="item"><a className="image-popup"><img src={'assets/images/img_large_3.jpg'} alt="image"/></a></div>
			    <div className="item"><a className="image-popup"><img src={'assets/images/img_large_4.jpg'} alt="image"/></a></div>
			    <div className="item"><a className="image-popup"><img src={'assets/images/img_large_5.jpg'} alt="image"/></a></div>
			    </OwlCarousel>
            <div id="fh5co-media-section">
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center heading-section">
                            <h3>Welcome to Narrow</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 animate-box">
                            <div className="fh5co-cover" style={{backgroundImage: "url(assets/images/work-1.jpg)"}}>
                                <div className="desc">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="fh5co-cover">
                                <div className="fh5co-cover-hero animate-box">
                                    <div className="fh5co-cover-thumb" style={{backgroundImage: "url(assets/images/work-2.jpg)"}}></div>
                                    <div className="desc-thumb">
                                        <p>Far far away, behind the word mountains, far from the</p>
                                        <span>Web Design</span>
                                    </div>
                                </div>

                                <div className="fh5co-cover-hero animate-box">
                                    <div className="fh5co-cover-thumb" style={{backgroundImage: "url(assets/images/work-3.jpg)"}}></div>
                                    <div className="desc-thumb">
                                        <p>Far far away, behind the word mountains, far from the</p>
                                        <span>User Experience</span>
                                    </div>
                                </div>

                                <div className="fh5co-cover-hero animate-box">
                                    <div className="fh5co-cover-thumb" style={{backgroundImage: "url(assets/images/work-4.jpg)"}}></div>
                                    <div className="desc-thumb">
                                        <p>Far far away, behind the word mountains, far from the</p>
                                        <span>Web Development</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fh5co-intro-section">
            			<div className="fh5co-intro-cover text-center animate-box" data-animate-effect="fadeIn" data-stellar-background-ratio="0.5" style={{backgroundImage: "url(assets/images/intro.jpg)"}}>
            				<a href="#" className="btn">Serving You Is Our First Priority</a>
            			</div>
            		</div>
        </>
    )
}
}

export default Carousel;
