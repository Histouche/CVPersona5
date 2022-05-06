import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'mobile-app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileFormationComponent implements OnInit {

  public schools = [
    {
      name: 'H3 Hitema',
      logo: 'H3Hitema-white',
      diplome: 'RNCP Niveau 1 : Expert en études et développement du Systeme d’Information',
      dateDebut: '2017',
      dateFin: '2019',
      lieu:'Issy-les-moulineaux',
      skills: ['Gestion de projet','Typescript', 'Angular', "Ionic 3", "Réponse d'appel d'offres", "Symfony 3"]
    },
    {
      name: 'Paris 13 Villetaneuse',
      logo: 'paris13',
      diplome: 'Licence Professionnelle : Métiers de l’informatique - Conception, Développement, Test de logiciels',
      dateDebut: '2015',
      dateFin: '2016',
      lieu:'Villetaneuse',
      skills: ['Java', 'PHP', 'Javascript', 'CSS', 'Angular 2']
    },
    {
      name: 'IUT Belfort Montbelliard',
      logo: 'iutbelfort',
      diplome: 'DUT Informatique',
      dateDebut: '2012',
      dateFin: '2015',
      lieu:'Belfort',
      skills: ['Java', 'PHP', 'Javascript', 'Python', 'HTML']
    }
  ];

  public currentSlide = 0;
  constructor(private app: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.switchSchool('H3Hitema-white');
    }, 100);
  }

  public onPan(){
    this.app.openMobileMenu();
  }

  public switchSchool(param: string){
    const banner = document.querySelectorAll('.form-banner');
    const activeButton = document.getElementById(param);

    const blocks = document.querySelectorAll('.school-bl');

    //update banner
    banner.forEach(element => {
      element.classList.remove('active');
    });
    activeButton?.classList.add('active');

    // update content
    blocks.forEach(element => {
      element.classList.remove('show');
    });
    document.getElementById('block-'+param)?.classList.add('show');

  }

}
