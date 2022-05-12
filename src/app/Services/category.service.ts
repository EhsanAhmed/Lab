import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // , Authorization': 'Token'
      })
    }
  }

  getAllCategory(): Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/Category`)
      
  }
}
