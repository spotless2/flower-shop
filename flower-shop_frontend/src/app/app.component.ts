import { Component, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MainPageComponent, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'flower-shop';
  showNavFooter: boolean = true;

  constructor(private elRef: ElementRef, private router: Router, private activatedRoute: ActivatedRoute) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavFooter = !(event.url.includes('/login') || event.url.includes('/register') || event.url.includes('/digital-invitations/i'));
      }
  })
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
