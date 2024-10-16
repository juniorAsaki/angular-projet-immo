import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';
import {catchError, Observable, shareReplay, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl: string = "environment.baseUrl";

  constructor(private http: HttpClient , private localStorage: LocalStorageService) { }

  private getHeaders(): HttpHeaders {
    const token: any = this.localStorage.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  }


  /**
   *
   * @param endPoint
   * @param id
   *
   * retourne une seule donnee
   */
  getOne(endPoint: string, id: number): Observable<any> {
    const url = `${this.baseUrl}/${endPoint}/${id}`;
    const headers: HttpHeaders = this.getHeaders();

    return this.http.get(url, { headers }).pipe(catchError(this.handleError));
  }


  /**
   *
   * @param endPoint
   * @param filterString
   *
   * retourne un tableau d'objet de donnees
   */
  getAll(endPoint: string, filterString?: string): Observable<any[]> {
    const headers: HttpHeaders = this.getHeaders();
    const url: string = filterString
      ?`${this.baseUrl}/${endPoint}?${filterString}`
      :`${this.baseUrl}/${endPoint}`;

    return this.http.get<any[]>(url, { headers }).pipe(

      shareReplay(1), // Il permet de mettre en cache les réponses d'API lorsque cela est pertinent, afin d’éviter des appels multiples pour la même donnée.
      catchError(this.handleError)
    )
  }


  /**
   *
   * @param endPoint
   * @param item
   *
   */
  post(endPoint: string, item: any): Observable<any> {
    const headers: HttpHeaders = this.getHeaders();

    return this.http.post(`${this.baseUrl}/${endPoint}`, item, { headers }).pipe(catchError(this.handleError));
  }

  put(endPoint: string, id: number, item: any): Observable<any> {
    const url = `${this.baseUrl}/${endPoint}/${id}`;
    const headers: HttpHeaders = this.getHeaders();

    return this.http.put(url, item, { headers }).pipe(catchError(this.handleError));
  }

  delete(endPoint: string, id: number): Observable<void> {
    const url = `${this.baseUrl}/${endPoint}/${id}`;
    const headers: HttpHeaders = this.getHeaders();

    return this.http.delete<void>(url, { headers }).pipe(catchError(this.handleError));
  }


  private handleError(error: any): Observable<any> {
    let errorMessage: string = 'Une erreur s\'est produite.';

    if (error.error instanceof ErrorEvent) {
      // Erreur du côté client
      errorMessage = `Erreur : ${error.error.message}`;
    } else {
      // Erreur du côté serveur
      switch (error.status) {
        case 400: errorMessage = `${error.error.message}`;
          break;
        case 401: errorMessage = `${error.error.message}`;
          break;
        case 404: errorMessage = `${error.error.message}`;
          break;
        case 500: errorMessage = `${error.error.message}`;
          break;
        case 510: errorMessage = `${error.error.message}`;
          break;
        default: errorMessage = error.message ?? 'Erreur inattendue. Veuillez réessayer plus tard.';
          break;
      }
    }

    return throwError((): Error => new Error(errorMessage));
  }




}
