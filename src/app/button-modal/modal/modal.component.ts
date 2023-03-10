import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() valor: boolean = false;

  @Output() modouValor = new EventEmitter();

  // openModal() {
  //   this.isModalOpen = !this.isModalOpen;
  // }

  ngOnInit(){}

  enviarInformacao(){
    this.modouValor.emit({novoValor: this.valor});
  }

}
