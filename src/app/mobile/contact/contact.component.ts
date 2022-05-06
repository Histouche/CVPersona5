import { Component, OnInit, ViewEncapsulation, Injectable, Optional } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder, FormControl, Validators, FormArray, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'mobile-app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MobileContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  how : FormControl = new FormControl("", [Validators.required]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam

  endpoint = "https://jonathanrodrigues.fr/sendEmail.php"; 

  constructor(private app: AppComponent, private formBuilder: FormBuilder, private http: HttpClient) {

    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      how: this.how,
      honeypot: this.honeypot
    });
   }

  ngOnInit(): void {
    
  }

  public onPan(){
    this.app.openMobileMenu();
  }

  onSubmit() {
    const headers = { 'content-type': 'application/json'}
    let postVars = {
      email : this.email.value,
      name : this.name.value,
      message : this.message.value,
      reason: "mobile"
    };
    console.log('test');
    this.http.post(this.endpoint, JSON.stringify(postVars), {'headers':headers}).subscribe({
        next: data => {
            console.log("success", data);
            document.getElementById('contactsend')?.classList.add('open');
        },
        error: error => {
            console.error('There was an error!', error);
        }
    })
  }

}
