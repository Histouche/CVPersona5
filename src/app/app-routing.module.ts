import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesComponent } from './page/experiences/experiences.component';
import { ContactComponent } from './page/contact/contact.component';
import { CompetencesComponent } from './page/competences/competences.component';
import { FormationComponent } from './page/formation/formation.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { PresentationComponent } from './page/presentation/presentation.component';
import { HomeComponent } from './page/home/home.component';
import { HomeMobileComponent } from './mobile/home/home.component';
import { MobileFormationComponent } from './mobile/formation/formation.component';
import { MobileContactComponent } from './mobile/contact/contact.component';
import { MobilePresentationComponent } from './mobile/presentation/presentation.component';
import { MobileCompetencesComponent } from './mobile/competences/competences.component';
import { MobileExperiencesComponent } from './mobile/experiences/experiences.component';
import { ProfilComponent } from './pages/profil/profil.component';

// V2 

const routes: Routes = [
  {path: 'experiences', component: ExperiencesComponent},
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'competences', component: CompetencesComponent},
  {path: 'formation', component: FormationComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'presentation', component: PresentationComponent},
  {path: 'mobile', component: HomeMobileComponent},
  {path: 'mobile/home', component: HomeMobileComponent},
  {path: 'mobile/formation', component: MobileFormationComponent},
  {path: 'mobile/contact', component: MobileContactComponent},
  {path: 'mobile/presentation', component: MobilePresentationComponent},
  {path: 'mobile/competences', component: MobileCompetencesComponent},
  {path: 'mobile/experiences', component: MobileExperiencesComponent},
  {path: 'profil', component: ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
