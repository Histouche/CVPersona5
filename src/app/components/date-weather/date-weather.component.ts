import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-date-weather',
  templateUrl: './date-weather.component.html',
  styleUrls: ['./date-weather.component.scss']
})
export class DateWeatherComponent implements OnInit {

  @Input() dayUn: number = 1;
  @Input() dayDn: number = 1;
  @Input() month: number = 1;
  @Input() weekDay: number = 1;
  @Input() weather: String = "";

  constructor(private app:AppComponent) { }

  ngOnInit(): void {
    
  }
  public backHome(){
    this.app.navigation('');
  }

}
