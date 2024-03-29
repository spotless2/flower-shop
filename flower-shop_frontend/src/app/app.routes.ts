import { Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent},
    { path: 'home', component: MainPageComponent},
    { path: 'about', component: AboutPageComponent},
    { path: 'services', component: ServicesPageComponent},
    { path: 'gallery', component: GalleryPageComponent},
    { path: 'contact', component: ContactPageComponent},
];
