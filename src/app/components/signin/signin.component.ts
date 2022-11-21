import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CuboService } from 'src/app/services/cubo.service';
import { Registro } from 'src/models/registro';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public mensaje!: string;

  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajaemail") cajaEmail!: ElementRef;
  @ViewChild("cajapass") cajaPass!: ElementRef;

  constructor(
    private _service: CuboService,
    ) { }

  registroUsuario(): void{
    var id = 0;
    var nombre = this.cajaNombre.nativeElement.value;
    var email = this.cajaEmail.nativeElement.value;
    var password = this.cajaPass.nativeElement.value;
    var registro = new Registro(id, nombre, email, password);
    this._service.registroUser(registro).subscribe(res=>{
      this.mensaje = "Registro completado!!!"
    });
  }

  ngOnInit(): void {
  }

}
