import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  how : FormControl = new FormControl("", [Validators.required]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  
  endpoint = "https://jonathanrodrigues.fr/sendEmail.php"; 
  

  constructor(private app: AppComponent, private formBuilder: FormBuilder, private http : HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      how: this.how,
      honeypot: this.honeypot
    });
  }

  ngOnInit(): void {
    this.app.updateSvg('contact', 'left');
    this.app.updateTitlePage('contact');
    document.getElementById('back-home')?.classList.add('show');
    this.displayContact();
  }

  protected displayContact(){
    const pagePlate = document.getElementById('page-plate');
    pagePlate?.classList.remove('experiences');
    pagePlate?.classList.add('contact');
  }

  onSubmit(){ 
    const headers = { 'content-type': 'application/json'}
    let postVars = {
      email : this.email.value,
      name : this.name.value,
      message : this.message.value,
      reason: this.how.value
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
