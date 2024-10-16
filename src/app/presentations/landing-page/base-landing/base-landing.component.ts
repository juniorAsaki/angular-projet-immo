import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {MainComponent} from '../main/main.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-base-landing',
  standalone: true,
  imports: [HeaderComponent , MainComponent , FooterComponent],
  templateUrl: './base-landing.component.html',
  styleUrl: './base-landing.component.scss'
})
export class BaseLandingComponent {

}
