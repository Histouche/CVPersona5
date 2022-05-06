import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent implements OnInit {

  constructor() { }

  @Input() content = {
    id: '',
    title : '' ,
    subtitle: '',
    text: [''],
    nbPages: 0
  };
  public title = "";
  public currentPage = 1;

  ngOnInit(): void {
  }

  goNext(){
    if(this.currentPage < this.content.nbPages){
      this.currentPage ++;
    } else {
      document.getElementById(this.content.id)?.classList.add('close');
      setTimeout(() => {
        document.getElementById(this.content.id)?.classList.remove('open', 'close');
        this.currentPage = 1;
      }, 350);
      
    }
    
  }
}
