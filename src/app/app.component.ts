import { Component } from '@angular/core';
import { RequestsService } from '../services/requests-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  requests = [];
  QRSIZE = 128;
  states = {
    0: 'waiting scan',
    1: 'waiting product',
    2: 'waiting user',
    3: 'completed'
  };

  constructor(private api: RequestsService) {
    this.api.getRequests()
    .subscribe((data) => {
      console.log(data);
      this.requests = data;
      // this.requests = response.map((request) => request.url = 'http://localhost:3000' + request.url);
    }, (error) => {
      console.log(error);
    });
  }

  onSubmit(f: NgForm) {
    this.api.newRequests(f.value.title).subscribe((response) => {
      this.requests.push(response);
    }, (error) => {
      console.log(error);
    });
  }

  delete(request) {
    this.api.deleteRequest(request.id).subscribe(() => {
      const index = this.requests.indexOf(request, 0);
      if (index > -1) {
         this.requests.splice(index, 1);
      }
    }, (error) => {
      console.log(error);
    });
  }

}
