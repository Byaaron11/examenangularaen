import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CuboService } from 'src/app/services/cubo.service';
import { Comentario } from 'src/models/comentario';
import { Cubo } from 'src/models/cubo';
import { Pedido } from 'src/models/pedido';

@Component({
  selector: 'app-detallecubo',
  templateUrl: './detallecubo.component.html',
  styleUrls: ['./detallecubo.component.css']
})
export class DetallecuboComponent implements OnInit {

  public cubo!: Cubo;
  public idCubo!: number;
  public comentarios!: Array<Comentario>;
  public compra!: Pedido;
  public token!: string | null;
  public mensaje!: string;

  constructor(
    private _service: CuboService,
    private _activerouter: ActivatedRoute
    ) { }

    loadCubo(id: number): void{
        this._service.getCuboById(id).subscribe(res=>{
          this.cubo = res;
        });
    }
    loadCometarios(id: number): void{
      this._service.getComentarios(id).subscribe(res=>{
        this.comentarios = res;
      });
    }

    realizarPedido(): void {
      if (this._service.getToken() != null){
        this.token = this._service.getToken();
        this._service.insertarPedido(this.idCubo, this.token).subscribe(res=>{
          this.mensaje = "Añadido al carrito!";
        });
      }
    }

 

  ngOnInit(): void {
    
    this._activerouter.params.subscribe((params: Params)=>{
      if(params['id'] != null){
        this.idCubo = parseInt(params['id']);
        this.loadCubo(this.idCubo);
        this.loadCometarios(this.idCubo)
      }
    });
  }

}
