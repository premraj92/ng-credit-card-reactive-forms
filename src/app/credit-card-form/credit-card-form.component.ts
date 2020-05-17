import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-credit-card-form',
  templateUrl: './credit-card-form.component.html',
  styleUrls: ['./credit-card-form.component.css']
})
export class CreditCardFormComponent implements OnInit {

  cardForm = new FormGroup({
    name: new FormControl('' , [ Validators.required , Validators.minLength(5)]),
    cardNumber: new FormControl('' , [ Validators.required , Validators.minLength(16) , Validators.maxLength(16)]),
    expiration: new DateFormControl('' , [ Validators.required , Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/) ]),
    securityCode: new FormControl('' , [ Validators.required , Validators.min(100), Validators.max(999) ])
  });

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.cardForm.controls.name);
  }

  onSubmit() {
    console.log(`Form submitted`);
  }

  onFormReset() {
    this.cardForm.reset();
  }
}
