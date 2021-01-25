import { Action } from '@ngrx/store'
import * as details from './app.actions'
import { CardDetails } from './data.model';

// Section 2
export function reducer(state: CardDetails[] = [], action: details.Actions) {

    // Section 3
    switch(action.type) {
        case details.Add_card:
            return [...state, action.payload];
        default:
            return state;
    }
}