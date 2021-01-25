import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { CardDetails } from './data.model'

// Section 2
export const Add_card = '[DETAILS] Add'

// Section 3
export class AddCardDetails implements Action {
    readonly type = Add_card

    constructor(public payload: CardDetails) {}
}


// Section 4
export type Actions = AddCardDetails 