import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'mobile-app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileExperiencesComponent implements OnInit {

  public companies = [
    {
      name: 'Logic-Immo',
      begYear: '20',
      endYear: '21',
      begMonth: 'Jan',
      endMonth: 'Nov',
      current: false,
      logo: 'logicimmo',
      logoSpecial: '',
      poste: 'Intégrateur web',
      missions: ['Intégration web', "Développeur js", "Mise en place de tests"],
      project: [],
      technos: [
        {
          name: 'Scss',
          logo : 'sass',
          descHover: 'Scss / Sass'
        },
        {
          name: 'Javascript',
          logo : 'js',
          descHover: 'Javascript'
        },
        {
          name: 'HTML / CSS',
          logo : 'htmlcss',
          descHover: 'HTML / CSS'
        }
      ],
      tools: [
        {
          name: 'Git',
          logo : 'git',
          descHover: 'Git'
        },
        {
          name: 'Scrum',
          logo : 'scrum',
          descHover: 'scrum'
        },
        {
          name: 'Zeplin',
          logo : 'zeplin',
          descHover: 'Zeplin'
        }
      ],
    },
    {
      name: 'La Squad IT',
      begYear: '19',
      endYear: '21',
      begMonth: 'Sep',
      endMonth: 'Nov',
      current: false,
      logo: 'squadit',
      logoSpecial: '',
      poste: 'Développeur Front-End',
      missions: ["Développement d'applications web Angular / Ionic", 'Intégration web'],
      project: [],
      technos: [
        {
          name: 'Angular',
          logo : 'angular',
          descHover: 'Angular 2+'
        },
        {
          name: 'Ionic',
          logo : 'ionic',
          descHover: 'Ionic 3/4'
        },
        {
          name: 'Typescript',
          logo : 'ts',
          descHover: 'Typescript'
        },
        {
          name: 'Node JS Npm',
          logo : 'nodejs',
          descHover: 'Node JS + Npm'
        },
        {
          name: 'Scss',
          logo : 'sass',
          descHover: 'Scss / Sass'
        },
        {
          name: 'Javascript',
          logo : 'js',
          descHover: 'Javascript'
        },
        {
          name: 'HTML / CSS',
          logo : 'htmlcss',
          descHover: 'HTML / CSS'
        }
      ],
      tools: [
        {
          name: 'Git',
          logo : 'git',
          descHover: 'Git'
        },
        {
          name: 'Scrum',
          logo : 'scrum',
          descHover: 'scrum'
        },
      ],
    },
    {
      name: 'Alphalives',
      begYear: '16',
      endYear: '19',
      begMonth: 'Jan',
      endMonth: 'Sep',
      current: false,
      logo: 'alphalives',
      logoSpecial: 'alphalives',
      poste: 'Développeur Full-stack',
      missions: ['Intégration web', "Développement d'applications web Angular / Ionic", "Développement de sites web sous Zend Framework 2", "Elaboration de sites web sous Wordpress"],
      project: [],
      technos: [
        {
          name: 'Angular',
          logo : 'angular',
          descHover: 'Angular 2+'
        },
        {
          name: 'Ionic',
          logo : 'ionic',
          descHover: 'Ionic 3/4'
        },
        {
          name: 'Typescript',
          logo : 'ts',
          descHover: 'Typescript'
        },
        {
          name: 'Node JS Npm',
          logo : 'nodejs',
          descHover: 'Node JS + Npm'
        },
        {
          name: 'Scss',
          logo : 'sass',
          descHover: 'Scss / Sass'
        },
        {
          name: 'ZF2',
          logo : 'zend2',
          descHover: 'Zend Framework 2'
        },
        {
          name: 'Wordpress',
          logo : 'wordpress',
          descHover: 'Wordpress'
        },
        {
          name: 'Javascript',
          logo : 'js',
          descHover: 'Javascript'
        },
        {
          name: 'PHP',
          logo : 'php',
          descHover: 'PHP'
        },
        {
          name: 'HTML / CSS',
          logo : 'htmlcss',
          descHover: 'HTML / CSS'
        }
      ],
      tools: [
        {
          name: 'Git',
          logo : 'git',
          descHover: 'Git'
        },
        {
          name: 'Scrum',
          logo : 'scrum',
          descHover: 'scrum'
        },
        {
          name: 'Illustrator',
          logo : 'illustrator',
          descHover: 'Adobe Illustrator'
        },
        {
          name: 'Adobe XD',
          logo : 'xd',
          descHover: 'Adobe XD'
        },
      ],
    },
    {
      name: 'Polantis',
      begYear: '14',
      endYear: '15',
      begMonth: 'Oct',
      endMonth: 'Jan',
      current: false,
      logo: 'polantis',
      logoSpecial: '',
      poste: 'Développeur Web',
      missions: ['Intégration web', "Elaboration de sites web sous Wordpress"],
      project: [],
      technos: [
        {
          name: 'Wordpress',
          logo : 'wordpress',
          descHover: 'Wordpress'
        },
        {
          name: 'Javascript',
          logo : 'js',
          descHover: 'Javascript'
        },
        {
          name: 'PHP',
          logo : 'php',
          descHover: 'PHP'
        },
        {
          name: 'HTML / CSS',
          logo : 'htmlcss',
          descHover: 'HTML / CSS'
        }
      ],
      tools: [
      ],
    }
  ]
  public currentTab = 0;

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
    document.getElementById('back-home')?.classList.add('show');
    setTimeout( () => {
      document.getElementById('block-logicimmo')?.classList.add('active');
      document.getElementById('logicimmo')?.classList.add('show');
    }, 100);
    
  }
  public onPan(){
    this.app.openMobileMenu();
  }

  public switchCompany(event:any, position:number){
    let tab= 0;
    if(event.deltaX < 0){
      if(this.currentTab < this.companies.length -1){
        tab = position + 1;
        console.log('right');
      }
    } else {
      if(this.currentTab > 0){
        console.log('left');
        tab = position - 1;
      }
    }
    this.displayInfos(this.companies[tab].logo, tab);
  }

  public displayInfos(logo:string, position:number){
    if(this.currentTab !== position){
      const logos = document.querySelectorAll('.company-item');
      const desc = document.querySelectorAll('.entreprise-info');
      this.currentTab = position;
      logos.forEach(logo => {
        logo.classList.remove('active');
      });
      desc.forEach(des => {
        des.classList.remove('show');
      })
      document.getElementById(logo)?.classList.add('show');
      document.getElementById('block-'+logo)?.classList.add('active');
    }
  }

}
