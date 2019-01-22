import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'},
  ];
  log(x) {
    if (x.name as string === 'comment') {
      console.log(x, x);
    }
    console.log(x);
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
