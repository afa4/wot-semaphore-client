import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemaphoreService {
  localUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  postColorFirstLed(color) {
    return this.http.post(this.localUrl + '/wot-semaphore/fst/led', color);
  }
}
