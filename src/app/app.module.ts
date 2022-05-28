import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injectable } from '@angular/core';
import * as Hammer from 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ExperiencesComponent } from './page/experiences/experiences.component';
import { PresentationComponent } from './page/presentation/presentation.component';
import { CompetencesComponent } from './page/competences/competences.component';
import { FormationComponent } from './page/formation/formation.component';
import { ContactComponent } from './page/contact/contact.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { PopinComponent } from './popin/popin.component';
import { HomeComponent } from './page/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HomeMobileComponent } from './mobile/home/home.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MobilePresentationComponent } from './mobile/presentation/presentation.component';
import { MobileExperiencesComponent } from './mobile/experiences/experiences.component';
import { MobileCompetencesComponent } from './mobile/competences/competences.component';
import { MobileFormationComponent } from './mobile/formation/formation.component';
import { MobileContactComponent } from './mobile/contact/contact.component';
import { SynthwaveComponent } from './creations/synthwave/synthwave.component';
import { MonokumaTheaterComponent } from './creations/monokuma-theater/monokuma-theater.component';
import { VelvetAnimationComponent } from './creations/velvet-animation/velvet-animation.component';
import { VoidSoulComponent } from './creations/void-soul/void-soul.component';
import { ProfilComponent } from './pages/profil/profil.component';

// hammerjs config
@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ExperiencesComponent,
    PresentationComponent,
    CompetencesComponent,
    FormationComponent,
    ContactComponent,
    PortfolioComponent,
    PopinComponent,
    HomeComponent,
    MenuComponent,
    HomeMobileComponent,
    MenuMobileComponent,
    MobilePresentationComponent,
    MobileExperiencesComponent,
    MobileCompetencesComponent,
    MobileFormationComponent,
    MobileContactComponent,
    SynthwaveComponent,
    MonokumaTheaterComponent,
    VelvetAnimationComponent,
    VoidSoulComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HammerModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    GoogleSheetsDbService 
  ],
  bootstrap: [AppComponent],
  exports: [
    PopinComponent
  ]
})
export class AppModule { }
