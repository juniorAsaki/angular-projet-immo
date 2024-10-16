import { Component, OnInit } from '@angular/core';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {SideBarComponent} from '../side-bar/side-bar.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  imports: [DashboardComponent, SideBarComponent, RouterOutlet],
  standalone: true
})
export class BaseComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
