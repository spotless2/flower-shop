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

function App() {

  return (
    <>
        <div className="box-wrap">
            <Header />
            <Carousel />
        </div>
    </>
  )
}

export default App
