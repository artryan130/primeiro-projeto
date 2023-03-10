import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css'],
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;

  @Output() modouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.modouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.modouValor.emit({novoValor: this.valor});
  }

}
