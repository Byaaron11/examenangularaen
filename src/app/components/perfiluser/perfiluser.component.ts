import { Component, OnInit } from '@angular/core';
import { CuboService } from 'src/app/services/cubo.service';
import { Registro } from 'src/models/registro';


@Component({
  selector: 'app-perfiluser',
  templateUrl: './perfiluser.component.html',
  styleUrls: ['./perfiluser.component.css']
})
export class PerfiluserComponent implements OnInit {

  public perfil!: Registro;
  public token: string | null;
  
  constructor(private _service: CuboService) { 
    this.token = this._service.getToken();
  }

  comprobarUser(): void {
    this._service.getPerfilUser(this.token).subscribe(res=>{
      this.perfil = res;
    });
  }

  ngOnInit(): void {
    this.comprobarUser();
  }

}
