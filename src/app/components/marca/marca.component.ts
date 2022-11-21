import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { CuboService } from 'src/app/services/cubo.service';
import { Cubo } from 'src/models/cubo';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {

  public marca!: string;
  public cubosMarca!: Array<Cubo>;

  constructor(
    private _activeRouter: ActivatedRoute,
    private _service: CuboService
    ) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params)=>{
      if(params['marca'] != null){
        this.marca = params['marca'];
        this._service.getCuboByMarca(this.marca).subscribe(res=>{
          this.cubosMarca = res;
        });
      }
    });
  }

}
