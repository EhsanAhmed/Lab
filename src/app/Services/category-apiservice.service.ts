import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ICategory } from '../ViewModels/ICategory';
@Injectable({
  providedIn: 'root'
})
export class CategoryAPIServiceService {

  private httpOptions;
  constructor(private httpClient: HttpClient){
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  GetAllCategory(): Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>(`${environment.APIURL}/Category`);
  }

  getCategoryByID(id: number): Observable<ICategory>
  {
    return this.httpClient.get<ICategory>(`${environment.APIURL}/Category/${id}`);
  }

  addNewCategory(newCat: ICategory): Observable<ICategory>
  {
    return this.httpClient.post<ICategory>(`${environment.APIURL}/Category`, JSON.stringify(newCat),this.httpOptions);
  }

  updateCategory(CatID: number, newCat: ICategory): Observable<ICategory>
  {
    return this.httpClient.patch<ICategory>(`${environment.APIURL}/Category/${CatID}`, JSON.stringify(newCat),this.httpOptions)
  }

  deleteCategory(CatID:number): Observable<ICategory>
  {
    return this.httpClient.delete<ICategory>(`${environment.APIURL}/Category/${CatID}`)
  }
}
