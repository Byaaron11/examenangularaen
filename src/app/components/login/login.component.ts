import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { CuboService } from 'src/app/services/cubo.service';
import { Login } from 'src/models/login';
import { Token } from 'src/models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("cajaemail") cajaEmail!: ElementRef;
  @ViewChild("cajapass") cajaPass!: ElementRef;

  public login!: Login;
  public token!: Token;

  constructor(private _service: CuboService, private _router: Router) { }

  iniciarSesion(): void{
    var email = this.cajaEmail.nativeElement.value;
    var password = this.cajaPass.nativeElement.value;
    var user = new Login(email, password);
    this._service.inicioSesion(user).subscribe(res=>{
      this.token = res;
      this._service.setToken(this.token);
      this._router.navigate(['/perfiluser']);
    });
  }

  ngOnInit(): void {
  }

}
