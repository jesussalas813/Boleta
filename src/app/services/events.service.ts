import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  urlServer = "http://190.131.209.106";
  constructor() { }

  getEvents(){
    return fetch(`${this.urlServer}/events`).then(
      response => response.json()
    );
  }
  getCategories(){
    return fetch(`${this.urlServer}/events.category_id`).then(
      response => response.json()
    );
  }

  getLocalEvents(){
    return dataEvents;
  }

}
