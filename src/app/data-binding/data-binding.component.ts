import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  url: string = 'www.arthurryan.com' 

  urlImage: string = 'http://lorempixel.com.br/500/400/?1'

  valorAtual: string = '';

  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  getValor() {
    return 5;
  }

  botaoClicado() {
    alert('Botão Clicado!')
  }

  onKeyUp(evento: KeyboardEvent) {
    // console.log((<HTMLInputElement>evento.target).value)
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

}
