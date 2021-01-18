import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormPost } from './models/form-post';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }

  postForm(formPost: FormPost) {
    return this.http.put(`http://localhost:8080/delivery/userData`, formPost);
  }

  getPrice(length, height, width) {
    return this.http.get(`http://localhost:8080/delivery/cost?length=${length}&height=${height}&width=${width}`)
  }
}
