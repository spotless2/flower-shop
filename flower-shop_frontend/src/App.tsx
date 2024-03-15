// import './App.css'
// import './assets/css/style.css'
// import './assets/css/animate.css'
// import './assets/css/bootstrap.css'
// import './assets/css/icomoon.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/owl.theme.default.min.css'

// import 'bootstrap'
// import 'jquery'
// import 'owl.carousel'
// import 'googlemap'
// import 'modernizr'
// import 'respond'
import './assets/css/animate.css'
import './assets/css/icomoon.css'
import './assets/css/bootstrap.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/style.css'



import Header from './components/Header.tsx';
import Carousel from './components/Carousel.tsx';
import ProductSection from './components/ProductSection.tsx';
import AboutSection from './components/About.tsx';
import Footer from './components/Footer.tsx';

function App() {

  return (
    <>
        <div className="box-wrap">
            <Header />
            <Carousel />
            <ProductSection />
            <AboutSection />
            <Footer />
        </div>
    </>
  )
}

export default App
