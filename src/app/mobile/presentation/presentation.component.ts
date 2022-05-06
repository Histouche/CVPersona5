import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'mobile-app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobilePresentationComponent implements OnInit {

  public hobbies = [
    {
      name: 'Jeux',
      image: 'jeu',
      desc: 'Grand amateur de jeu de cartes et de plateaux'
    },
    {
      name: 'Dessin',
      image: 'dessin',
      desc: "Même si je dispose de moins de temps pour cela, le dessin reste un de mes passe-temps de predilection, mon amour du dessin a d'ailleurs joué un grand role dans mon choix de carriere. Cliquez sur l'icone 'Drive' pour avoir un apercu de mes réalisations",
      link: "https://photos.app.goo.gl/JxWobTjkNJK6WwLT8"
    },
    {
      name: 'Lecture',
      image: 'lecture',
      desc: "La lecture a toujours été un part de ma vie mais ce n'est que recemment que j'ai élargi mes horizons de lecture. Mangas, romans, livres d'histoire ou bandes dessinnees"
    },
    {
      name: 'Graphisme',
      image: 'graph',
      desc: "En parrallèle du dessin, j'ai appris le graphisme il y a presque 10 ans dans le cadre d'un forum pour faire des signatures grâce au logiciel Gimp. Cliquez sur l'icone 'Drive' pour avoir un apercu de mes réalisations",
      link: "https://photos.app.goo.gl/zqpEgu4nPkxYvQ1B7"
    },
    {
      name: 'Jeux vidéos',
      image: 'jeu-video',
      desc: "Que dire,"
    },
    {
      name: 'Sport',
      image: 'muscu',
      desc: "Loin d'être un grand sportif, néanmoins j'adore aller à la salle (quand elles sont ouvertes)"
    },
    {
      name: 'Billard/Bowling',
      image: 'billard',
      desc: "Que dire"
    },
  ];

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
    document.getElementById('back-home')?.classList.add('show');
  }

  public onPan(){
    this.app.openMobileMenu();
  }

  public tabsSwitch(tab: string){
    const tabs = document.querySelectorAll('.pres-tab');
    const contents = document.querySelectorAll('.pres-content');

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    contents.forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById('presentation-block-'+tab)?.classList.add('active');
    document.querySelectorAll('.tab-'+tab).forEach(tab => {
      tab.classList.add('active');
    });
  }

}
