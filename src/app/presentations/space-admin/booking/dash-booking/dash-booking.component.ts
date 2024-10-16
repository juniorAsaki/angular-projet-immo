import { Component } from '@angular/core';
import {SideBarComponent} from '../../side-bar/side-bar.component';
import {ListBookingComponent} from '../list-booking/list-booking.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dash-booking',
  standalone: true,
  imports: [
    SideBarComponent,
    ListBookingComponent,
    RouterOutlet
  ],
  templateUrl: './dash-booking.component.html',
  styleUrl: './dash-booking.component.scss'
})
export class DashBookingComponent {

}
