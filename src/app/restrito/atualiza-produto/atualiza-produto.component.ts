import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-atualiza-produto',
  templateUrl: './atualiza-produto.component.html',
  styleUrls: ['./atualiza-produto.component.css']
})
export class AtualizaProdutoComponent implements OnInit {

  public produtoId: number = 0;
  public produto: Produto = new Produto(0,"","","",0);

  constructor(private _produtoService: ProdutoService, private _activatedRoute:
    ActivatedRoute, private _router: Router) {
      this._activatedRoute.params.subscribe(params => this.produtoId =
        params['id']);
  }

  ngOnInit(): void {
    this.listarProduto();
  }

  listarProduto():void {
    this._produtoService.getProduto(this.produtoId)
    .subscribe((res:any) => { console.log(res[0].produto);
      this.produto = new
  Produto(res[0].id,res[0].produto,res[0].descricao,res[0].foto, res[0].preco);

    })
  }

atualizar(id: number){
    this._produtoService.atualizarProduto(id, this.produto).subscribe(
      produto => {
        this.produto = new Produto(0,"","","",0);
        // O comando certo: roda SÓ quando o banco avisa que terminou
        this._router.navigate(["/restrito/lista"]);
      },
      err => {
        alert("Ops! Erro ao atualizar. Verifique se o servidor está rodando.");
        console.log("erro ao atualizar");
      }
    );
  }
}
