import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  public getFakeData(): Observable<any[]> {
    {
      let response1 = this.http.get("/api/employees");
      let response2 = this.http.get("/api/departments");
      let response3 = this.http.get("/api/tasks");
      return forkJoin([response1, response2, response3]);
    }
  }
}
