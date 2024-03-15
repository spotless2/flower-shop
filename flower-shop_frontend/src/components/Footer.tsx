import React from 'react';

function Footer() {
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <p>
                Copyright 2016 Free Html5 <a href="#">Narrow</a>. All Rights Reserved. <br />
                Made with <i className="icon-heart3 love"></i> by <a href="http://freehtml5.co/" target="_blank" rel="noopener noreferrer">Freehtml5.co</a> / Demo Images: <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
              </p>
              <p className="fh5co-social-icons">
                <a href="#"><i className="icon-twitter-with-circle"></i></a>
                <a href="#"><i className="icon-facebook-with-circle"></i></a>
                <a href="#"><i className="icon-instagram-with-circle"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
