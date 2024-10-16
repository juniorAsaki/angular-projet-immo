import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/host/api/v1/authenticate'; // URL du backend Spring Boot

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(credentials: { email: string; password: string }): Observable<void> {
    return this.http.post<any>(this.apiUrl, credentials);
    // .pipe(
    //   map((response: { token: string; }) => {
    //     // Sauvegarder le token dans localStorage
    //     localStorage.setItem('token', response.token);
    //   })
    // );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
