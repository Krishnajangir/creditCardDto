import { Component } from '@angular/core';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'creditCardDto';
  userdetails = {};
  constructor(private readonly appService: AppService){}
  ngOnInit() {
  }
  
}
