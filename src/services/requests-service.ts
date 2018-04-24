import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestsService {

  public apiUrl = 'https://waitmeup-api.herokuapp.com/';

  public constructor(private http: Http) {
  }


  // Handle Products
  public getRequests() {
    console.log('getting requests')
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // const options = new RequestOptions({ headers, method: 'get' });
    return this.http
      .get(`${this.apiUrl}requests`)
      .map((response) => response.json());
  }

  public newRequests(id, title) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers, method: 'post' });
    const body = {
        title: title
    }
    return this.http
      .post(`${this.apiUrl}/requests/${id}`, body, options)
      .map((response) => response.json());
  }

}
