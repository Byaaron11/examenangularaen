import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';


@Component({
  selector: 'app-homecubos',
  templateUrl: './homecubos.component.html',
  styleUrls: ['./homecubos.component.css']
})
export class HomecubosComponent implements OnInit {

  public cubos!: Array<Cubo>;

  constructor(private _service: CuboService) { }

  ngOnInit(): void {
    //Al iniciar la pagina llama al getCubos
    this._service.getCubos().subscribe(res=> {
      this.cubos = res;
    });
  }

}
