import { Component, OnInit } from '@angular/core';
import {SideBarComponent} from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    SideBarComponent
  ],
  standalone: true
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
