import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class EventStreamService {
  private subject = new Subject<any>();

  constructor() {}

  raiseEvent(event) {
    this.subject.next(event);
  }

  getEventObservable(): Observable<any> {
    return this.subject.asObservable();
  }
}
