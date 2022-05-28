import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilComponent implements OnInit {

  public activateLeft = "";
  public activateRight = "";
  public activedContent = "";
  public lvl2Window = "";

  constructor(public app: AppComponent) { }

  ngOnInit(): void {
   
  }

  public openProfil(){
    setTimeout(() => {
      console.log('ereere');
      document.getElementById('shills')?.classList.add('open');  
    }, 0);
    setTimeout(() => {
      this.app.knifeStrike.play();
    }, 500)
  }

  public goToLvl2(param: string){
    if (param === 'left'){
      this.activateLeft = "";
      this.activateLeft = "active";
      setTimeout(() => {
        this.activateRight = "lv2";
        this.lvl2Window = "left";
      }, 1000);
    } else if( param === 'right'){
      this.activateRight = "";
      this.activateRight = "active";
      setTimeout(() => {
        this.activateLeft = "lv2";
        this.lvl2Window = "right";
      }, 1000);
    }
    this.activedContent = "active";
    setTimeout(() => {
      this.activateRight = this.activateLeft = "lv2";
    }, 2000);    
  }

}
