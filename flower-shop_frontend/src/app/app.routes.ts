import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ServicesPageComponent } from './components/services-page/services-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DigitalInvitationsComponent } from './components/digital-invitations/digital-invitations.component';
import { EventPackagesComponent } from './components/event-packages/event-packages.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WeddingTheme1Component } from './components/digital-invitations/invitation-1/wedding-theme-1/wedding-theme-1.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent},
    { path: 'home', component: MainPageComponent},
    { path: 'events', component: AboutPageComponent},
    { path: 'flowers', component: ServicesPageComponent},
    { path: 'gallery', component: GalleryPageComponent},
    { path: 'contact', component: ContactPageComponent},
    { path: 'digital-invitations', component: DigitalInvitationsComponent},
    { path: 'event-packages', component: EventPackagesComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'digital-invitations/i', component: WeddingTheme1Component},
    { path: 'digital-invitations/i/:name', component: WeddingTheme1Component },
];

