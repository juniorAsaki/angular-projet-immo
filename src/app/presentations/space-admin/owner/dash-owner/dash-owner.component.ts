import { Component } from '@angular/core';
import {SideBarComponent} from "../../side-bar/side-bar.component";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dash-owner',
  standalone: true,
  imports: [
    SideBarComponent,
    RouterOutlet
  ],
  templateUrl: './dash-owner.component.html',
  styleUrl: './dash-owner.component.scss'
})
export class DashOwnerComponent {

}
