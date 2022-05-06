import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompetencesComponent implements OnInit {

  public skills = {
    langages: {
      top: {
        text: 'JS/TS',
        level: '5',
        inProgress: false
      },
      topRight: {
        text: 'Python',
        level: '3',
        inProgress: false
      },
      bottomRight: {
        text: 'PHP',
        level: '5',
        inProgress: false
      },
      bottomLeft: {
        text: 'HTML',
        level: '5',
        inProgress: false
      },
      topLeft: {
        text: 'Sass',
        level: '5',
        inProgress: false
      }
    },
    frameworks: {
      top: {
        text: 'Ionic',
        level: '4',
        inProgress: false
      },
      topRight: {
        text: 'Symfony',
        level: '2',
        inProgress: false
      },
      bottomRight: {
        text: 'Zend Framework',
        level: '3',
        inProgress: false
      },
      bottomLeft: {
        text: 'Vue JS',
        level: '2',
        inProgress: true
      },
      topLeft: {
        text: 'Angular',
        level: '5',
        inProgress: false
      }
    }
  }
  public currentSkill = {
    top: {
      text: '',
      level: '',
      inProgress: false
    },
    topRight: {
      text: '',
      level: '',
      inProgress: false
    },
    bottomRight: {
      text: '',
      level: '',
      inProgress: false
    },
    bottomLeft: {
      text: '',
      level: '',
      inProgress: false
    },
    topLeft: {
      text: '',
      level: '',
      inProgress: false
    }
  };
  public activeBanner = "langages";

  constructor(private app: AppComponent) { }

  ngOnInit() {
    this.app.updateSvg('competences', 'right');
    this.app.updateTitlePage('competences');
    document.getElementById('back-home')?.classList.add('show');
    this.currentSkill = this.skills.langages;

    const pagePlate = document.getElementById('page-plate');
    pagePlate?.classList.add('competences');
  }

    /** 
     *  Mis à jour : 13/12/2021 
     *  sélection des compétences à afficher
        param : chaine de caractère indiquant la partie à afficher
     **/
  public switchStar(param: string){
    const banner = document.querySelectorAll('.extra-row');
    const activeButton = document.getElementById(param);
    const textStar = document.querySelectorAll('.text-zone');
    const noStar = document.querySelectorAll('.no-star-zone');
    const star = document.getElementById("star-zone");
    const starM = document.getElementById("star-zone-mini");
    const plate = document.getElementById("special-plate");
    const plate2 = document.getElementById("special-plate-2");
    // autres plaques
    const OZ = document.getElementById("other-zone");
    const LZ = document.getElementById("langues-zone");

    banner.forEach(element => {
      element.classList.remove('active');
    });
    activeButton?.classList.add('active');
    /*textStar.forEach(element => {
      element.classList.remove('show');
    });*/
    noStar.forEach(element => {
      element.classList.remove('show');
    });
    plate?.classList.remove("show");
    plate2?.classList.remove("show");


    if(activeButton?.classList.contains('lang')){
      textStar.forEach(element => {
        element.classList.remove('show');
      });
      star?.classList.remove('hide');
      starM?.classList.remove('hide');
      this.activeBanner = "langages";
      this.currentSkill = this.skills.langages;
      document.getElementById('langages')?.classList.add('show');
      
    } else if(activeButton?.classList.contains('tools')){
      textStar.forEach(element => {
        element.classList.remove('show');
      });
      star?.classList.remove('hide');
      starM?.classList.remove('hide');
      this.currentSkill = this.skills.frameworks;
      this.activeBanner = "frameworks";
      document.getElementById('frameworks')?.classList.add('show');
    } else if (activeButton?.classList.contains('other')) {
      plate?.classList.add("show");
      plate?.classList.remove("disabled");
      plate2?.classList.remove("show");
      OZ?.classList.add("show");
    } else if (activeButton?.classList.contains('langues')){
      plate?.classList.add("show");
      plate?.classList.add("disabled");
      plate2?.classList.add("show");
      LZ?.classList.add("show");
    }
  }

}
