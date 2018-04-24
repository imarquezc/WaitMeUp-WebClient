import { Component } from '@angular/core';
import { RequestsService } from '../services/requests-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  requests = [];

  constructor(private api:RequestsService) {
    this.api.getRequests().subscribe((response) => {
      this.requests = response;
    }, (error) => {
      console.log(error)
    })
  }


}
