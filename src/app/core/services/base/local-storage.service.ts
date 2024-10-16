import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private tokenKey: string = 'access_token';
  private currentUser: string ='current_user';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  saveUser(user: any){
    localStorage.setItem(this.currentUser, JSON.stringify(user))
  }

  getCurrentUser(): any {
    const user = localStorage.getItem(this.currentUser);
    return user ? JSON.parse(user) : null; // Renvoie l'utilisateur ou null si non trouvé
  }

  destroyToken(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.currentUser);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null && token !== undefined;
  }
}
