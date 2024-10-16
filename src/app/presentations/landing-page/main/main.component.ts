import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {SearchComponent} from '../../properties/search/search.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, SearchComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
