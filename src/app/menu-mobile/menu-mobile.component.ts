import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }
  public goTo(param:string){
    this.app.navigation(param);
  }


  public closeMobileMenu(){
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

    const links = document.querySelectorAll('.mobile-menu-open-link');

    back?.classList.remove('open');
    menu?.classList.remove('open');
    icon?.classList.remove('open');
    //masquage des menus au fur et à mesure de l'animation
    setTimeout(() => {
      cont?.classList.add('hide');
      cont?.classList.remove('show');
    }, 700);
    setTimeout(() => {
      port?.classList.add('hide');
      port?.classList.remove('show');
    }, 650);
    setTimeout(() => {
      form?.classList.add('hide');
      form?.classList.remove('show');
    }, 550);
    setTimeout(() => {
      comp?.classList.add('hide');
      comp?.classList.remove('show');
    }, 450);
    setTimeout(() => {
      exp?.classList.add('hide');
      exp?.classList.remove('show');
    }, 400);
    setTimeout(() => {
      homePr?.classList.add('hide');
      homePr?.classList.remove('show');
    }, 300);
    setTimeout(() => {
      homeM?.classList.add('hide');
      homeM?.classList.remove('show');
    }, 150);
    setTimeout(() => {
      links?.forEach(element => {
        element.classList.remove('hide');
      });
    }, 850);
  }
}
