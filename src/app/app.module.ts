import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// pages
import { HomeComponent } from './pages/home/home.component';

// components
import { MenuComponent } from './components/menu/menu.component';
import { BackgroundComponent } from './components/background/background.component';
import { DateWeatherComponent } from './components/date-weather/date-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DateWeatherComponent,
    HomeComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
