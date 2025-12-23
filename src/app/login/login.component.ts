import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service'; // Importação do Serviço [cite: 2161]
import { Router } from '@angular/router';        // Importação do Roteador [cite: 2161]

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario!: string; // [cite: 2168]
  senha!: string;   // [cite: 2169]

  constructor(private _loginService: LoginService, private _router: Router) { } // [cite: 2170]

  ngOnInit(): void {
  }

  fazerLogin(){
    // Chama o serviço de login passando usuário e senha [cite: 2174]
    this._loginService.login(this.usuario, this.senha);
    
    // Redireciona para a página restrita [cite: 2174]
    this._router.navigate(['/restrito/lista']);
    
    // Esconde o menu principal [cite: 2175]
    this._loginService.setMostraMenu(false);
  }
}