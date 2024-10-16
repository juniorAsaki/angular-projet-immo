import { Component } from '@angular/core';
import {SideBarComponent} from "../../side-bar/side-bar.component";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dash-review',
  standalone: true,
  imports: [
    SideBarComponent,
    RouterOutlet
  ],
  templateUrl: './dash-review.component.html',
  styleUrl: './dash-review.component.scss'
})
export class DashReviewComponent {

}
