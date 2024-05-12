import { Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { GalleryPageComponent } from './components/gallery-page/gallery-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { DigitalInvitationsComponent } from './components/digital-invitations/digital-invitations.component';
import { EventPackagesComponent } from './components/event-packages/event-packages.component';
import { WeddingTheme1Component } from './components/digital-invitations/invitation-1/wedding-theme-1/wedding-theme-1.component';
import { FlowerShopComponent } from './components/flower-shop/flower-shop.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent},
    { path: 'home', component: MainPageComponent},
    { path: 'events', component: AboutPageComponent},
    { path: 'flowers', component: FlowerShopComponent},
    { path: 'gallery', component: GalleryPageComponent},
    { path: 'contact', component: ContactPageComponent},
    { path: 'digital-invitations', component: DigitalInvitationsComponent},
    { path: 'event-packages', component: EventPackagesComponent},
    { path: 'digital-invitations/i', component: WeddingTheme1Component},
    { path: 'digital-invitations/i/:name', component: WeddingTheme1Component },
    { path: 'panel', component: AdminPanelComponent}
];

