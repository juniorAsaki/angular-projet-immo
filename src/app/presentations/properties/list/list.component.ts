import { Component, OnInit } from '@angular/core';
import {FooterComponent} from '../../landing-page/footer/footer.component';
import {HeaderComponent} from '../../landing-page/header/header.component';
import {SearchComponent} from '../search/search.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list',
  standalone : true,
  imports: [FooterComponent , HeaderComponent , SearchComponent , RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
