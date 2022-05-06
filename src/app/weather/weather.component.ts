import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
// composant calendrier météo
export class WeatherComponent {

  @Input() dayUn: number = 1;
  @Input() dayDn: number = 1;
  @Input() month: number = 1;
  @Input() weekDay: number = 1;
  @Input() weather: String = "";


  constructor(private app:AppComponent) {
  }

  public backHome(){
    this.app.navigation('');
  }
}
