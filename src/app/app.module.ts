import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreditCardFormComponent } from './credit-card-form/credit-card-form.component';
import { CreditInputComponent } from './credit-input/credit-input.component';
import { CardDisplayComponent } from './card-display/card-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardFormComponent,
    CreditInputComponent,
    CardDisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
