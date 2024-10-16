import { Component, OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  imports: [
    RouterLink
  ],
  standalone: true
})
export class SideBarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
