import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'mobile-app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileCompetencesComponent implements OnInit {

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
        level: '4',
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
  public pagePlate = document.getElementById('page-plate');

  constructor(private app: AppComponent) { 
  }

  ngOnInit(): void {
    //document.getElementById('back-home')?.classList.add('show');
    document.querySelector('mobile-app-competences')?.classList.add('lang');
    this.currentSkill = this.skills.langages;
    this.pagePlate?.classList.add('mobile-competences');
  }

  public onPan(){
    this.app.openMobileMenu();
  }

  public switchSkill(param: string){
    const banner = document.querySelectorAll('.skill-banner');
    const activeButton = document.getElementById(param);
    //const textStar = document.querySelectorAll('.text-zone');

    // update banner
    banner.forEach(element => {
      element.classList.remove('active');
    });
    activeButton?.classList.add('active');

    // update content
    const starZone = document.getElementById('star-zone');
    const textZone = document.querySelectorAll('.text-zone');
    const otherZone = document.getElementById('other-zone');

    otherZone?.classList.remove('show');

    switch(param){
      case 'lang' : {
        starZone?.classList.add('show');
        textZone.forEach(element => {
          element.classList.remove('show');
        });
        document.getElementById('text-'+param)?.classList.add('show');
        document.querySelector('mobile-app-competences')?.classList.remove('tools');
        document.querySelector('mobile-app-competences')?.classList.add(param);
        this.currentSkill = this.skills.langages;
        this.pagePlate?.classList.remove('other');
        break;
      }
      case 'tools' : {
        starZone?.classList.add('show');
        textZone.forEach(element => {
          element.classList.remove('show');
        });
        document.getElementById('text-'+param)?.classList.add('show');
        document.querySelector('mobile-app-competences')?.classList.remove('lang');
        document.querySelector('mobile-app-competences')?.classList.add(param);
        this.currentSkill = this.skills.frameworks;
        this.pagePlate?.classList.remove('other');
        break;
      }
      case 'other' : {
        starZone?.classList.remove('show');
        otherZone?.classList.add('show');
        this.pagePlate?.classList.add('other');
        document.querySelector('mobile-app-competences')?.classList.remove('lang', 'tools');
        break;
      }
    }
  }

}
