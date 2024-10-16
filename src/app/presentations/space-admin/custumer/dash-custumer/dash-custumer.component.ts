import { Component } from '@angular/core';
import {SideBarComponent} from "../../side-bar/side-bar.component";
import {ListCustumerComponent} from '../list-custumer/list-custumer.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dash-custumer',
  standalone: true,
  imports: [
    SideBarComponent,
    ListCustumerComponent,
    RouterOutlet
  ],
  templateUrl: './dash-custumer.component.html',
  styleUrl: './dash-custumer.component.scss'
})
export class DashCustumerComponent {

}
