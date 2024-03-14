// import './css/animate.css'
// import './css/bootstrap.css'
// import './css/icomoon.css'
// import './css/owl.carousel.min.css'
// import './css/owl.theme.default.min.css'
// import './css/style.css'
const Header = () => {
    return (
        <>
        		<header role="banner" id="fh5co-header">
        			<div className="container">
        				<nav className="navbar navbar-default">
        					<div className="row">
        						<div className="col-md-3">
        							<div className="fh5co-navbar-brand">
        								<a className="fh5co-logo" href="index.html">Narrow</a>
        							</div>
        						</div>
        						<div className="col-md-9 main-nav">
        							<ul className="nav text-right">
        								<li className="active"><a href="index.html"><span>Home</span></a></li>
        								<li><a href="services.html">Services</a></li>
        								<li><a href="product.html">Products</a></li>
        								<li><a href="about.html">About</a></li>
        								<li><a href="contact.html">Contact</a></li>
        							</ul>
        						</div>
        					</div>
        				</nav>
        		  </div>
        		</header>
        </>
    )
}

export default Header
