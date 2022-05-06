import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormationComponent implements OnInit {

  public schools = [
    {
      name: 'H3 Hitema',
      logo: 'H3Hitema-white',
      diplome: 'RNCP Niveau 1 : Expert en études et développement du Systeme d’Information',
      dateDebut: '2017',
      dateFin: '2019',
      lieu:'Issy-les-moulineaux',
      skills: ['Gestion de projet', 'Typescript', 'Angular', "Ionic 3", "Réponse d'appel d'offres", "Symfony 3"]
    },
    {
      name: 'Paris 13 Villetaneuse',
      logo: 'paris13',
      diplome: 'Licence Professionnelle : Métiers de l’informatique - Conception, Développement, Test de logiciels',
      dateDebut: '2015',
      dateFin: '2016',
      lieu:'Villetaneuse',
      skills: ['Java', 'PHP', 'Javascript']
    },
    {
      name: 'IUT Belfort Montbelliard',
      logo: 'iutbelfort',
      diplome: 'DUT Informatique',
      dateDebut: '2012',
      dateFin: '2015',
      lieu:'Belfort',
      skills: ['Java', 'PHP', 'Javascript', 'Python']
    }
  ];

  public currentSlide = 0;

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
    this.app.updateSvg('formation', 'left');
    this.app.updateTitlePage('formation');
    document.getElementById('back-home')?.classList.add('show');
    this.displayFormation();
  }

  protected displayFormation(){
    const pagePlate = document.getElementById('page-plate');
    pagePlate?.classList.remove('experiences');
    pagePlate?.classList.add('formation');
  }

  public goNext(){
    const slider = document.getElementById('school-slide');
    if(this.currentSlide <= 2){
      this.currentSlide ++;
      slider!.style.left = 'calc( -'+ this.currentSlide +'* 50vw)';
    } 
  }

  public goPrev(){
    const slider = document.getElementById('school-slide');
    if(this.currentSlide > 0){
      this.currentSlide --;
      slider!.style.left = 'calc( -'+ this.currentSlide +'* 50vw)';
    }
  }
}
