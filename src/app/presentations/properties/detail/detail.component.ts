import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../../landing-page/header/header.component';
import {FooterComponent} from '../../landing-page/footer/footer.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
