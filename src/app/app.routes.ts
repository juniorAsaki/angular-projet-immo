import { Routes } from '@angular/router';
import {BaseLandingComponent} from './presentations/landing-page/base-landing/base-landing.component';
import {RegisterComponent} from './presentations/authentication/register/register.component';
import { DashboardComponent } from './presentations/space-admin/dashboard/dashboard.component';
import { DashCustumerComponent } from './presentations/space-admin/custumer/dash-custumer/dash-custumer.component';
import { DashOwnerComponent } from './presentations/space-admin/owner/dash-owner/dash-owner.component';
import { DashResidenceComponent } from './presentations/space-admin/residence/dash-residence/dash-residence.component';
import { DashBookingComponent } from './presentations/space-admin/booking/dash-booking/dash-booking.component';
import { DashReviewComponent } from './presentations/space-admin/reviews/dash-review/dash-review.component';
import { DetailComponent } from './presentations/properties/detail/detail.component';
import { ListComponent } from './presentations/properties/list/list.component';
import {ListCustumerComponent} from './presentations/space-admin/custumer/list-custumer/list-custumer.component';
import {ListOwnerComponent} from './presentations/space-admin/owner/list-owner/list-owner.component';
import {ListResidenceComponent} from './presentations/space-admin/residence/list-residence/list-residence.component';
import {ListBookingComponent} from './presentations/space-admin/booking/list-booking/list-booking.component';
import {ListReviewComponent} from './presentations/space-admin/reviews/list-review/list-review.component';
import {LoginComponent} from './presentations/authentication/login/login.component';
import {FormResidenceComponent} from './presentations/space-admin/residence/form-residence/form-residence.component';
import {
  ReservationInfosClientComponent
} from './presentations/properties/reservation-infos-client/reservation-infos-client.component';
import {
  ReservationDateSejourComponent
} from './presentations/properties/reservation-date-sejour/reservation-date-sejour.component';
import {
  ReservationPaiementComponent
} from './presentations/properties/reservation-paiement/reservation-paiement.component';

export const routes: Routes = [
  { path: 'accueil', component: BaseLandingComponent, title: 'Synergy Immo' },
  { path: 'details-residence/:id', component: DetailComponent, title: 'Detail Residence'},
  {path: "infos-custumer" , component: ReservationInfosClientComponent , title: "infos client"},
  {path: "date-sejour" , component: ReservationDateSejourComponent , title: "date de sejour"},
  {path: "paiement" , component: ReservationPaiementComponent , title: "paiement"},
  { path: 'list-residence', component: ListComponent, title: 'List Residence' },
  { path: 'register', component: RegisterComponent, title: "S'inscrit" },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {path: "auth" , children: [
      {path: "login" , component: LoginComponent , title: "page de connexion"},
      {path: "register" , component: RegisterComponent , title: "page d'inscription"}
    ]},
  {
    path: 'admin',
    children: [
      { path: 'dashboard', component: DashboardComponent, title: 'dashboard' },
      {
        path: 'gestion-clients',
        component: DashCustumerComponent,
        title: 'gestion client',
        children: [
          {path: 'list' , component: ListCustumerComponent}
        ]
      },
      {
        path: 'gestion-proprietaire',
        component: DashOwnerComponent,
        title: 'gestion proprietaire',
        children: [
          {path: 'list' , component: ListOwnerComponent}
        ]
      },
      {
        path: 'gestionresidence',
        component: DashResidenceComponent,
        title: 'gestion residence',
        children: [
          {path: 'list' , component: ListResidenceComponent},
          {path: 'form' , component: FormResidenceComponent}
        ]
      },
      {
        path: 'gestionreservation',
        component: DashBookingComponent,
        title: 'gestion reservation',
        children: [
          {path: 'list' , component: ListBookingComponent}
        ]
      },
      {
        path: 'gestioncommentaire',
        component: DashReviewComponent,
        title: 'gestion commentaire',
        children: [
          {path: 'list' , component: ListReviewComponent}
        ]
      },
    ],
  },

];
