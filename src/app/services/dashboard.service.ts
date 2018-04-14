import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http:HttpClient) {
  }

  getPublicationChannels() {
    const token = localStorage.getItem('token');
    const url = 'https://phoenix.euroconsumers.org/api/v1/ppm/product_categories/dashboard_user_partial/?country_id=4&api_token=' + token;
    return this.http.get(url);
  }
}
