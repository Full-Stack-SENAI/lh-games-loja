import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public mostraMenu: Subject<boolean> = new Subject<boolean>();

  login(usuario: string, senha: string): void {
    if (usuario === 'aluno' && senha === '1234') {
      localStorage.setItem('token', 'token');
      this.mostraMenu.next(false); // Esconde o menu no login
    } else {
      this.mostraMenu.next(true);
    }
  }

  logout(): void {
    localStorage.clear();
    this.mostraMenu.next(true);
  }

  getMostraMenu(): Observable<boolean> {
    return this.mostraMenu.asObservable();
  }

  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor);
  }
}