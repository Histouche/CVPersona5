import { Component, ViewEncapsulation, ElementRef, Directive, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  // system info
  public version = "1.2.2";
  public angularV = "13";
  public realWeather = true;

  public knifeStrike = new Audio('/assets/sounds/p5_dagger_strike.mp3');
  public theatreMusic = new Audio('/assets/sounds/creation_danganronpa.mp3');

  title = 'Jonathan Rodrigues Persona5 CV';
  public hour: number ;
  public date:any;
  public day:number = 1;
  public daydn:number = 1;
  public dayun:number = 1;
  public month:number = 1;
  public dayMoment = "";
  public weekDay:number = 1;

  public lat:number = 0;
  public lng:number = 0;
  

  protected weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
  protected apiKey = "97082ed5d1692ef1f437d6143c0a9652";

  public weather = {
    conditions: "",
    clouds : 0
  }
  public conditions:String = "";
  public cloudsHtml: any;
  public frontRow:any = "";
  public backRow:any = "";
  
  public stars:String = "hide";

  public shills = {
    id: "shills",
    title: 'shills',
    subtitle: "Toujours pas",
    text: [
      "Et vive le javascript"
    ],
    nbPages: 1
  }
  
  public tuto = {
    id: "tutorial",
    title: 'information',
    subtitle: "Bienvenue",
    text: [
      "Ce site est optimisé pour les navigateurs basés sur Chromium et Firefox. L'autorisation géographique n'est demandée que pour l'affichage dynamique de la météo selon votre emplacement, AUCUNE donnée personnelle n'est stockée.",
      "Cette plateforme est avant tout un hommage et n'a pas vocation à m'approprier ce qui m'a inspiré pour ce site.",
      "Merci de votre attention et bonne visite."
    ],
    nbPages: 3
  }
  public travaux = {
    id: "travaux",
    title: 'information',
    subtitle: "En travaux",
    text: ["Cette partie est encore en travaux"],
    nbPages: 1
  }
  public contactSend = {
    id: "contactsend",
    title: 'information',
    subtitle: "Demande envoyée",
    text: ["Merci de m'avoir contacté."],
    nbPages: 1
  }

  // device 
  public userAgent = "";
  public device = "";
  // menu mobile
  public menuMobile = 'open';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private elementRef:ElementRef) {
    // Informations sur la date 
    this.date = new Date();
    this.day = this.date.getDate()
    this.weekDay = this.date.getDay();
    this.updateDateNumbers(this.day);  
    this.month = this.date.getMonth() +1;  
    this.hour = this.date.getHours();
    this.updateDayMoment(this.hour);

    // Informations Géographiques
    navigator.geolocation.getCurrentPosition(this.success.bind(this), ()=> {
      this.error()
    });
    
    // actualisation de la date 
    
    setInterval(() => {
      if(this.realWeather == true){
        this.date = new Date();
        this.day = this.date.getDate();  
        this.weekDay = this.date.getDay();
        this.month = this.date.getMonth()+1;
        this.hour = this.date.getHours();
        this.updateDayMoment(this.hour);
        this.updateDateNumbers(this.day);  
      }
    }, 60000);   
    
    
    this.userAgent = navigator.userAgent;
    

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(this.userAgent)){
      this.device = 'mobile';
      this.router.navigate(['/profil']);
      
      /*setTimeout(() => {
        document.getElementById('mobileLoading')?.classList.add('open');
      }, 1000);
      setTimeout(() => {
        this.knifeStrike.play();
      }, 1500)*/
    } else{
      this.router.navigate(['/profil']);
    }
    // hide name/surname
    document.getElementById('infosme')?.classList.remove('show');
    
  
  }

  public openMobileMenu(){
    this.menuMobile = "close";
    const menu = document.getElementById('mobile-menu-bg');
    const homeM = document.getElementById('mobile-menu-home');
    const homePr = document.getElementById('mobile-menu-pres');
    const exp = document.getElementById('mobile-menu-exp');
    const comp = document.getElementById('mobile-menu-comp');
    const form = document.getElementById('mobile-menu-form');
    const port = document.getElementById('mobile-menu-port');
    const cont = document.getElementById('mobile-menu-cont');

    const back = document.getElementById('mobile-menu-back');
    const icon = document.getElementById('mobile-menu-icon');

    icon?.classList.add('open');
    menu?.classList.add('open');
    back?.classList.add('open');
    //affichage des menus au fur et à mesure de l'animation
    setTimeout(() => {
      cont?.classList.add('show');
    }, 200);
    setTimeout(() => {
      port?.classList.add('show');
    }, 250);
    setTimeout(() => {
      form?.classList.add('show');
    }, 350);
    setTimeout(() => {
      comp?.classList.add('show');
    }, 400);
    setTimeout(() => {
      exp?.classList.add('show');
    }, 550);
    setTimeout(() => {
      homePr?.classList.add('show');
    }, 700);
    setTimeout(() => {
      homeM?.classList.add('show');
    }, 750);
  }


  protected updateDateNumbers(day:number){
    if(day < 10){
      this.daydn = 0;
      this.dayun = day;
    } else {
      if(day < 20){
        this.daydn = 1;
        this.dayun = day - 10;
      } else {
        if(day < 30){
          this.daydn = 2;
          this.dayun = day - 20;
        } else {
          this.daydn = 3;
          this.dayun = day - 30;
        }
      }
    }
  }

  public updateDayMoment(hour: number){

    if(hour >= 0 && hour < 6){
      this.dayMoment = "night";
    } else {
      if(hour >= 6 && hour < 12){
        this.dayMoment = "morning";
      } else {
        if(hour >= 12 && hour < 14){
          this.dayMoment = "launchtime";
        } else{
          if(hour >= 14 && hour < 16){
            this.dayMoment = "afternoon";
          } else{
            if(hour >= 16 && hour < 19){
              this.dayMoment = "twillight";
            } else{
              if(hour >= 19 && hour < 22){
                this.dayMoment = "evening";
              } else {
                this.dayMoment = "night";
              }
            }
          }
        }
      }
    }
    // ciel pluvieux 
    if(String(this.weather.conditions) == 'Rain' || String(this.weather.conditions) == 'Drizzle' || String(this.weather.conditions) == 'Thunderstorm'){
      if(this.dayMoment == "morning" || this.dayMoment == "launchtime" || this.dayMoment == "afternoon"){
          this.dayMoment = "rainy";
      }
    }
  }

  public success(position:any){
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
    this.load(this.lat, this.lng).subscribe((data: any) => {
      console.log(data);
      this.weather.conditions = data['weather'][0]['main'];
      this.weatherIcon();
      this.weather.clouds = data['clouds']['all'];
      this.clouds();
    });
  }

  public error(){
    alert('Imossible de récupérer vos données de localisation, les coordonnées utilisées pour la Météo seront donc celles de Paris');
    // coordonnées de Paris
    this.lat = 48.8588377;
    this.lng = 2.2770201;
    this.load(this.lat, this.lng).subscribe((data: any) => {
      this.weather.conditions = data['weather'][0]['main'];
      this.conditions = data['weather'][0]['main'];
      this.weatherIcon();
      this.weather.clouds = data['clouds']['all'];
      this.clouds();
    });
  }


  public load(lat:Number, lng:Number) {
    return this.http.get(this.weatherUrl + '?lat=' + lat + '&lon=' + lng + '&APPID=' + this.apiKey)
  }

  public weatherIcon(){
    if(String(this.weather.conditions) == 'Clear'){
      this.removeRain();
      if(this.dayMoment == "evening" || this.dayMoment == "night"){
        this.conditions = "clearNight";
        this.stars = "show";
      } else{
        this.stars = "hide";
        this.conditions = "sunny";
      }
    } else {
      this.stars = "hide";
      if(String(this.weather.conditions) == 'Snow'){
        this.conditions = "snowy";
        this.removeRain();
      } else {
        if(String(this.weather.conditions) == 'Rain' || String(this.weather.conditions) == 'Drizzle' || String(this.weather.conditions) == 'Thunderstorm'){
          this.conditions = "rainy";
          this.rain();
        } else {
          this.removeRain();
          this.conditions = "cloudy";
        }
      }
    }
  }

  public rain(){

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }
    this.frontRow = this.sanitizer.bypassSecurityTrustHtml(drops);
    this.backRow = this.sanitizer.bypassSecurityTrustHtml(backDrops);
  }

  public removeRain(){
    var drops = "";
    var backDrops = "";
    this.frontRow = this.sanitizer.bypassSecurityTrustHtml(drops);
    this.backRow = this.sanitizer.bypassSecurityTrustHtml(backDrops);
  }

  public clouds(){
    var clouds = "";
    if(this.weather.clouds >= 25){
      clouds += "<div class='clouds-1 cloud-xs-1'></div><div class='clouds-1 cloud-xs-2'></div><div class='clouds-1 cloud-medium-2'></div>";
    }
    if(this.weather.clouds >= 50){
      clouds += "<div class='clouds-2 cloud-xs-1'></div><div class='clouds-2 cloud-medium-2'></div><div class='clouds-2 cloud-medium-1'></div>";
    }
    if(this.weather.clouds >= 75){
      clouds += "<div class='clouds-3 cloud-large'></div><div class='clouds-3 cloud-medium-1'></div>";
    }
    if(this.weather.clouds >= 100){
      clouds += "<div class='clouds-4 cloud-large'></div><div class='clouds-4 cloud-small'></div>";
    }

    this.cloudsHtml = clouds;
  }
  
  public navigation(param:string){


    let menu = document.getElementById('menu-bg');
    if(this.device == "mobile"){
      menu = document.getElementById('mobile-menu-bg');
    }
    let toAnimate = document.querySelectorAll('.to-animate');
    let bgClr = document.getElementById('color-transition');
    let pagePlate = document.getElementById('page-plate')!;

    let menusButton = document.querySelectorAll('.menu-link');

    if(param == 'portfolio' && this.device == "mobile"){
      setTimeout(() => {
        document.getElementById('travaux')?.classList.add('open');
      }, 1000);
      setTimeout(() => {
        this.knifeStrike.play();
      }, 1500)
    } else {

      menusButton.forEach( mB =>  mB.classList.add("disabled"));

      if(menu?.classList.contains('open')){
        this.closeMenu();
      }
      toAnimate?.forEach(element => {
        element.classList.add('animate')
      });
      bgClr?.classList.add('animate');
  
      setTimeout(() => {
        pagePlate.className= '';
        document.getElementById('infosme')?.classList.remove('show');
        this.updateTitlePage(param);
        if(param != ''){
          document.getElementById('back-home')?.classList.add('show');
          document.getElementById('page-title')?.classList.add('show');
          document.getElementById('menu-icon-block')?.classList.remove('hide');
        } else {
          document.getElementById('back-home')?.classList.remove('show');
        }
        if (this.device == 'mobile'){
          this.router.navigate(['mobile/'+param]);
        } else {
          this.router.navigate([param]);
        }
      }, 1000);
      setTimeout(() => {
        toAnimate?.forEach(element => {
          element.classList.remove('animate')
        });
        bgClr?.classList.remove('animate');
        menusButton.forEach( mB =>  mB.classList.remove("disabled"));
       
      }, 2000);
    } 
  }


  public updateSvg(param:string, direction: string){
    let tabCalques = Array.from(document.querySelectorAll('.background-svg'));
    tabCalques.forEach(element => {
      element.classList.remove('show');
      element.classList.remove('competences');
    });
    document.getElementById(param+'-background')?.classList.add('show');
    if(direction == "right"){
      document.getElementById('svg')?.classList.remove('left');
    } else {
      document.getElementById('svg')?.classList.add('left');
    }
    if(param == "competences"){
      document.getElementById('svg')?.classList.add('competences');
    } else {
      document.getElementById('svg')?.classList.remove('competences');
    }
  }

  public updateTitlePage(param:string){
    let title = document.getElementById('page-title');
    let h1 = document.getElementById('page-h1');
    let h2 = document.getElementById('page-h2');
    title!.className = "";
    switch (param){
      case 'presentation':
        title!.classList.add('show', 'presentation');
        h1!.innerHTML = 'PrésenTaTion';
        h2!.innerHTML = "A propos de moi";
        break;
      case 'experiences':
        title!.classList.add('show', 'experiences');
        h1!.innerHTML = 'ExpéRiences';
        h2!.innerHTML = "Mes experiences professionnelles";
        break;
      case 'formation':
        title!.classList.add('show', 'formation');
        h1!.innerHTML = 'ForMaTion';
        h2!.innerHTML = "Tout mon parcours et mes diplomes";
        break;
      case 'competences':
        title!.classList.add('show', 'competences');
        h1!.innerHTML = '';
        h2!.innerHTML = "";
        break;
    }  
  }
  public closeMenu(){
      let menu = document.getElementById('menu-bg');
      let homeM = document.getElementById('menu-home');
      let homePr = document.getElementById('menu-pres');
      let exp = document.getElementById('menu-exp');
      let comp = document.getElementById('menu-comp');
      let form = document.getElementById('menu-form');
      let port = document.getElementById('menu-port');
      let cont = document.getElementById('menu-cont');
  
      let back = document.getElementById('menu-back');
      let icon = document.getElementById('menu-icon');
      let links = document.querySelectorAll('.menu-open-link');

    if(this.device == "mobile"){
      menu = document.getElementById('mobile-menu-bg');
      homeM = document.getElementById('mobile-menu-home');
      homePr = document.getElementById('mobile-menu-pres');
      exp = document.getElementById('mobile-menu-exp');
      comp = document.getElementById('mobile-menu-comp');
      form = document.getElementById('mobile-menu-form');
      port = document.getElementById('mobile-menu-port');
      cont = document.getElementById('mobile-menu-cont');
  
      back = document.getElementById('mobile-menu-back');
      icon = document.getElementById('mobile-menu-icon');
  
      links = document.querySelectorAll('.mobile-menu-open-link');
    }

    back?.classList.remove('open');
    menu?.classList.remove('open');
    icon?.classList.remove('open');
    //masquage des menus au fur et à mesure de l'animation
    setTimeout(() => {
      homeM?.classList.add('hide');
      homeM?.classList.remove('show');
    }, 700);
    setTimeout(() => {
      homePr?.classList.add('hide');
      homePr?.classList.remove('show');
    }, 650);
    setTimeout(() => {
      exp?.classList.add('hide');
      exp?.classList.remove('show');
    }, 550);
    setTimeout(() => {
      comp?.classList.add('hide');
      comp?.classList.remove('show');
    }, 450);
    setTimeout(() => {
      form?.classList.add('hide');
      form?.classList.remove('show');
    }, 400);
    setTimeout(() => {
      port?.classList.add('hide');
      port?.classList.remove('show');
    }, 300);
    setTimeout(() => {
      cont?.classList.add('hide');
      cont?.classList.remove('show');
    }, 150);
    setTimeout(() => {
      links?.forEach(element => {
        element.classList.remove('show', 'hide');
      });
    }, 850);
  }
}
