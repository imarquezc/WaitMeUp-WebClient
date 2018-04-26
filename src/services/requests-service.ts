import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestsService {

  // public apiUrl = 'https://waitmeup-api.herokuapp.com/';
  public apiUrl = 'http://localhost:3000/';

  public constructor(private http: Http) {
  }


  // Handle Products
  public getRequests() {
    console.log('getting requests');
    return this.http
      .get(`${this.apiUrl}requests`)
      .map((response) => response.json())
      .map((requests) =>  {
        return requests.map((request) => Object.assign(request, {
          url: 'http://localhost:3000' + request.url
        }));
      });
  }

  public newRequests(title) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers, method: 'post' });
    const body = {
        title: title
    };
    return this.http
      .post(`${this.apiUrl}/requests`, body, options)
      .map((response) => response.json());
  }

  public deleteRequest(requestId) {
    return this.http
      .delete(`${this.apiUrl}/requests/${requestId}`);
  }

}
