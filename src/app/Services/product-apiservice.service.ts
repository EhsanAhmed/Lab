import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../ViewModels/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIServiceService {

  private httpOptions;
  constructor(private httpClient: HttpClient){
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  GetAllProducts(): Observable<Iproduct[]>
  {
    return this.httpClient.get<Iproduct[]>(`${environment.APIURL}/Product`);
  }

  getProductsByCatID(catID: number): Observable<Iproduct[]>
  {
    return this.httpClient.get<Iproduct[]>(`${environment.APIURL}/Product/getByCatID?id=${catID}`);
  }

  getProductByID(prdID: number): Observable<Iproduct>
  {
    return this.httpClient.get<Iproduct>(`${environment.APIURL}/Product/${prdID}`);
  }

  addNewProduct(newPrd: Iproduct): Observable<Iproduct>
  {
    return this.httpClient.post<Iproduct>(`${environment.APIURL}/Product`, JSON.stringify(newPrd),this.httpOptions);
  }

  updateProduct(prdID: number, newPrd: Iproduct): Observable<Iproduct>
  {
    return this.httpClient.patch<Iproduct>(`${environment.APIURL}/Product/${prdID}`, JSON.stringify(newPrd),this.httpOptions)
  }

  deleteProduct(prdID:number): Observable<Iproduct>
  {
    return this.httpClient.delete<Iproduct>(`${environment.APIURL}/Product/${prdID}`)
  }
}
