import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Persoon } from './persoon';

const httpOptions = {headers: new HttpHeaders({'Content-type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class PersoonService {
  private personenUrl = 'api/personen';

  constructor(private http: HttpClient) { }

  getPersonen(): Observable<Persoon[]> {
    return this.http.get<Persoon[]>(this.personenUrl).pipe(
      catchError(this.handleError('getPersonen', []))
    );
  }

  getKlanten(): Observable<Persoon[]> {
    return this.http.get<Persoon[]>(this.personenUrl).pipe(
      map(personen => personen.filter(persoon => persoon.isCustomer)),
      catchError(this.handleError('getKlanten', []))
      );
  }

  getPersoon(id: number): Observable<Persoon> {
    const url = `${this.personenUrl}/${id}`;
    return this.http.get<Persoon>(url).pipe(catchError(this.handleError<Persoon>(`getPersoon id=${id}`)));
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation, error);
      return of(result as T);
    };
  }

  updatePersoon(persoon: Persoon): Observable<any> {
    return this.http.put(this.personenUrl, persoon, httpOptions).pipe(
      catchError(this.handleError<any>('updatePersoon')));
  }

  addPersoon(persoon: Persoon): Observable<Persoon> {
    return this.http.post<Persoon>(this.personenUrl, persoon, httpOptions).pipe(
      catchError(this.handleError<Persoon>('addPersoon'))
    );
  }

  deletePersoon(persoon: Persoon | number): Observable<Persoon> {
    const id = typeof persoon === 'number' ? persoon : persoon.id;
    const url = `${this.personenUrl}/${id}`;
    return this.http.delete<Persoon>(url, httpOptions).pipe(
      catchError(this.handleError<Persoon>('deletePersoon'))
    );
  }

  zoekPersoon(zoekString: string): Observable<Persoon[]> {
    if (!zoekString.trim()) {
      return of([]);
    }
    return this.http.get<Persoon[]>(`${this.personenUrl}/?firstName=${zoekString}`).pipe(
      catchError(this.handleError<Persoon[]>('zoekPersoon', []))
    );
  }
}
