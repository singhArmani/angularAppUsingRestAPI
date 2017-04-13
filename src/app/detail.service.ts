import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Detail } from './detail';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DetailService {

  // private isntance variable to  hold base url
  private detailForParticularUserUrl = 'http://localhost:8000/username/';
  private detailForAllUser = 'http://localhost:8000/';

  // Resolve HTTP using the constructor
  constructor(private http: Http) { }

  // Simulate GET /username/:username
  public getDetailByfirstName(firstName: string): Observable<Detail> {

    return this.http.get(this.detailForParticularUserUrl + firstName)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  // get detail for all users
  public getAllUserDetails(): Observable<Detail[]> {
    return this.http.get(this.detailForAllUser)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
