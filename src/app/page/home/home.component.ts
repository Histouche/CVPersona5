import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router'; 
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit  {


  public config = "close";

  constructor(private router: Router, public app: AppComponent) { }

  ngOnInit(): void {
    console.log('home init');
    document.getElementById('infosme')?.classList.add('show');
    this.app.updateSvg('home', 'right');
    //document.getElementById('menu-icon-block')?.classList.add('hide');
    
    //test TODO: supprimer après test
    //localStorage.removeItem('tuto');

    if(localStorage.getItem('tuto') === null){
      localStorage.setItem('tuto', 'already visited');
      //this.app.upadateDayMoment(this.app.date.getHours());

      if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(this.app.device)){
        setTimeout(() => {
          document.getElementById('tutorial')?.classList.add('open');
         
        }, 1000);
        setTimeout(() => {
          this.app.knifeStrike.play();
        }, 1500)
      }
    }
  }

  public goTo(param:string){
    this.app.navigation(param);
  }

  public openSystem(){
    if(this.config == "close"){
      this.config = "open";
    } else{
      this.config = "close";
    }
  }

  public realWeather(param: boolean){
    let date = new Date();
    const yes = document.getElementById('realW-yes');
    const no = document.getElementById('realW-no');

    const tz = document.getElementById('timezone');
    const wz = document.getElementById('weatherzone');

    const cW = document.getElementById('disabledW') as HTMLInputElement;
    const cT = document.getElementById('disabledT') as HTMLInputElement;

    if(param == true){
      cW.checked = true;
      cT.checked = true;
      yes?.classList.add('active');
      no?.classList.remove('active');
      this.app.realWeather = true;
      this.app.updateDayMoment(date.getHours());
      //this.app.load(this.app.lat, this.app.lng);
      //this.app.weatherIcon();
      navigator.geolocation.getCurrentPosition(this.app.success.bind(this.app), ()=> {
        this.app.error()
      });
    
      wz?.classList.remove('show');
      tz?.classList.remove('show');
    } else{
      no?.classList.add('active');
      yes?.classList.remove('active');
      this.app.realWeather = false;

      wz?.classList.add('show');
      tz?.classList.add('show');
    }
  }

  public updateWeather(param:string){
    if(param == "clair" ){
      this.app.weather.conditions = "Clear";
      if(this.app.dayMoment == "evening" || this.app.dayMoment == "night"){
        this.app.conditions = "clearNight";
      } else{  
        this.app.conditions = "sunny";
      }
      this.app.weather.clouds = 0;
    }
    if(param == "nuageux"){
      this.app.weather.conditions = "Cloudy";
      this.app.conditions = "cloudy";
      this.app.weather.clouds = 75;
    }
    if(param == "pluvieux"){
      this.app.weather.conditions = "Rain";
      this.app.conditions = "rainy";
      this.app.weather.clouds = 25;
      this.app.clouds();
      this.app.rain();
    } else{
      this.app.removeRain();
    }
    if(param != ''){
      this.app.weatherIcon();
      this.app.updateDayMoment(this.app.hour);
      this.app.clouds();
    }
   
  }

  public updateDayMoment(param:string){
    if(param == "jour"){
      this.app.updateDayMoment(12);
      this.app.hour = 12;
    }
    if(param == "crepuscule"){
      this.app.updateDayMoment(16);
      this.app.hour = 16;
    }
    if(param == "soir"){
      this.app.updateDayMoment(20);
      this.app.hour = 20;
    }
    if(param == "nuit"){
      this.app.updateDayMoment(2);
      this.app.hour = 2;
    }
    if(param != ''){
      this.app.weatherIcon();
    }
  }

}
