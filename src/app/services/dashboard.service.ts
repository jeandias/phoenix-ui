import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'X-Token': localStorage.getItem('token')})
};

@Injectable()
export class DashboardService {

  constructor(private http:HttpClient) {
  }

  getPublicationChannels() {
    const url = 'https://phoenix.euroconsumers.org/api/v1/ppm/product_categories/dashboard_user_partial/?country_id=4';
    return this.http.get(url, httpOptions);
  }
}
