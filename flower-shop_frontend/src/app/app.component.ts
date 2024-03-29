import { Component, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MainPageComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flower-shop';

  constructor(private elRef: ElementRef){ 
  
  }

  ngOnInit() {
    const backToTopButton = this.elRef.nativeElement.querySelector('.back-to-top');
    if (backToTopButton) {
      backToTopButton.addEventListener('click', () => {
        this.scrollToTop();
      });
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  observer: any;

  ngAfterViewInit(){
    this.observer = new MutationObserver(mutations => {
      
      console.log('Dom change detected...');
      $.getScript('/assets/vendor/purecounter/purecounter_vanilla.js'); //Add path to your custom js file
      $.getScript('/assets/vendor/aos/aos.js'); //Add path to your custom js file
      $.getScript('/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'); //Add path to your custom js file
      $.getScript('/assets/vendor/glightbox/js/glightbox.min.js'); //Add path to your custom js file
      $.getScript('/assets/vendor/isotope-layout/isotope.pkgd.min.js'); //Add path to your custom js file
      $.getScript('/assets/vendor/swiper/swiper-bundle.min.js'); //Add path to your custom js file
      $.getScript('/assets/vendor/waypoints/noframework.waypoints.js'); //Add path to your custom js file
      $.getScript('/assets/vendor/php-email-form/validate.js'); //Add path to your custom js file
      $.getScript('/assets/js/main.js'); //Add path to your custom js file

    });
    var config = { attributes: true, childList: true, characterData: true };

    this.observer.observe(this.elRef.nativeElement, config);
  }
}
