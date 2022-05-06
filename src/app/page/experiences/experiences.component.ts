import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExperiencesComponent implements OnInit {

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
  constructor(private app: AppComponent) {

  }

  ngOnInit() {
    this.app.updateSvg('experiences', 'left');
    this.app.updateTitlePage('experiences');
    document.getElementById('back-home')?.classList.add('show');
  }

  public displayInfos(logo:string){
    const pagePlate = document.getElementById('page-plate');
    const expBg = document.getElementById('experiences-background');
    const expSubBg = document.getElementById('experiences-sub-background'); 

    if(pagePlate?.className !== ''){
      pagePlate?.classList.remove('experiences');
      expSubBg?.classList.remove('show');
      expBg?.classList.add('show');
      document.querySelectorAll('.entreprise-info')?.forEach(comp => {
        comp.classList.remove('show');
      });
      document.querySelectorAll('.block-company')?.forEach(comp => {
        comp.classList.remove('active');
      });
      setTimeout(() => {
        pagePlate?.classList.add('experiences');
        expBg?.classList.remove('show');
        expSubBg?.classList.add('show');
        document.getElementById(logo)?.classList.add('show');
        document.getElementById('block-'+logo)?.classList.add('active');
      }, 100);
    } else {
      pagePlate?.classList.add('experiences');
      expBg?.classList.remove('show');
      expSubBg?.classList.add('show');
      document.getElementById(logo)?.classList.add('show');
      document.getElementById('block-'+logo)?.classList.add('active');
    }
  }
}
