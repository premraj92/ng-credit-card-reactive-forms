import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-credit-input',
  templateUrl: './credit-input.component.html',
  styleUrls: ['./credit-input.component.css']
})
export class CreditInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    const {dirty , touched, errors} = this.control;

    return dirty && touched && errors;
  }

}
