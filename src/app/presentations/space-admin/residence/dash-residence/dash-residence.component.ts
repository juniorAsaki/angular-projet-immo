import { Component } from '@angular/core';
import {SideBarComponent} from "../../side-bar/side-bar.component";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dash-residence',
  standalone: true,
  imports: [
    SideBarComponent,
    RouterOutlet
  ],
  templateUrl: './dash-residence.component.html',
  styleUrl: './dash-residence.component.scss'
})
export class DashResidenceComponent {

}
