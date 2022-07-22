import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  // moment de la journée 
  @Input() dayMoment: string = "";
  // code des nuages généré
  @Input() cloudsHtml:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
