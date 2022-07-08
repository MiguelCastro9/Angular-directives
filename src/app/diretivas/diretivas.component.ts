import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  valorInput: string = '';
  msg: string = '';
  condicao: boolean = false;
  acesso: boolean = false;
  cor: string[] = ['azul','roxo','vermelho'];
  cores: string = '';
  aleatorio: number = 0;
  //ngFor
  frutas: string[] = ['Abacaxi', 'Maçã', 'Maracujá'];

  constructor() { }

  //ngClass
  click(){

    this.condicao = !this.condicao;
  }

  //ngModel
  acaoInput(evento: KeyboardEvent){

    this.valorInput = (<HTMLInputElement>evento.target).value;
  }

  //ngIf
  botaoIf(){
    this.acesso = !this.acesso;
  }

  //ngSwitch
  botaoSwitch(){

  this.aleatorio = Math.floor(Math.random() * this.cor.length);
  this.cores = this.cor[this.aleatorio];
  }

  ngOnInit(): void {
  }

}
