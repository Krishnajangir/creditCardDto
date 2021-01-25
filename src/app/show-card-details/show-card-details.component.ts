import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { CardDetails } from '../data.model';

@Component({
  selector: 'app-show-card-details',
  templateUrl: './show-card-details.component.html',
  styleUrls: ['./show-card-details.component.scss']
})
export class ShowCardDetailsComponent implements OnInit {

  creditInformations: Observable<CardDetails[]>;

  // Section 2
  constructor(private store: Store<AppState>) { 
    this.creditInformations = store.select('tutorial');
  }
 
  ngOnInit() {}

}
