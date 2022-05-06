import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  public rideauL = "/assets/img/creations/danganronpa/1out.png";
  public rideauR = "/assets/img/creations/danganronpa/5out.png";

  
  constructor(private app: AppComponent) { }

  ngOnInit(): void {
    this.animateMonokuma();
  }

  public creaSwitch(param:string){
   //var creas = document.getElementsByClassName('creation');
   var creas = document.querySelectorAll('.creation');
   creas.forEach(function(crea){
    crea.classList.add('hidden');
   });

    document.getElementById('creation-'+param)?.classList.remove('hidden');
   if(param == 'danganronpa'){
     this.animateMonokuma();
   }
  }

  public animateMonokuma(){
    //ini rideau
    this.rideauL = "/assets/img/creations/danganronpa/1out.png";
    this.rideauR = "/assets/img/creations/danganronpa/5out.png";
    //animations rideaux
    this.app.theatreMusic.volume = 0.05;
    //this.app.theatreMusic.play();
    setTimeout(() => {
      this.rideauL = "/assets/img/creations/danganronpa/2out.png";
      this.rideauR = "/assets/img/creations/danganronpa/6out.png";
    }, 3500);
    setTimeout(() => {
      this.rideauL = "/assets/img/creations/danganronpa/3out.png";
      this.rideauR = "/assets/img/creations/danganronpa/7out.png";
    }, 4000);
    setTimeout(() => {
      this.rideauL = "/assets/img/creations/danganronpa/4out.png";
      this.rideauR = "/assets/img/creations/danganronpa/8out.png";
    }, 4500);
    setTimeout(() => {
    document.getElementById('monokuma_text')?.classList.remove('hide');
    document.getElementById('monokuma_text_body1')?.classList.add('animate');
    }, 5500);
    setTimeout(() => {  
      document.getElementById('monokuma_text_body2')?.classList.add('animate');
    }, 7000);
    setTimeout(() => {
      document.getElementById('monokuma_text_body3')?.classList.add('animate');
    }, 8500);
  }

}
