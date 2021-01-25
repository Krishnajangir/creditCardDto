import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { CardDetails } from '../data.model';
import * as details from './../app.actions'


@Component({
  selector: 'app-add-card-details',
  templateUrl: './add-card-details.component.html',
  styleUrls: ['./add-card-details.component.scss']
})
export class AddCardDetailsComponent implements OnInit {
  creditCardDetails = {};
  detailsForm: FormGroup;

  constructor(private store: Store<AppState>, private readonly route: Router, private readonly formBuilder: FormBuilder) {
    this.createFormGroup();
  }
  customValidator = (control: FormControl) => {
    let currentDate = new Date();
    let selectedDate = new Date(control.value);
    if (currentDate >= selectedDate) return { dateError: true };
    else return { dateError: false };
  }
  createFormGroup() {
    this.detailsForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required]],
      cardHolder: ['', [Validators.required]],
      expirationDate: ['', [Validators.required, this.customValidator]],
      securityCode: [null],
      amount: [null, [Validators.required]],
    })
  }
  ngOnInit() {
  }

  addCardDetails() {
    this.store.dispatch(new details.AddCardDetails(this.detailsForm.value));
    this.route.navigate(['/cardDetails']);

  }
}
