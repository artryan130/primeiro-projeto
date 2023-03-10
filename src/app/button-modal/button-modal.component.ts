import { Component } from '@angular/core';

@Component({
  selector: 'buttonModal',
  templateUrl: './button-modal.component.html',
  styleUrls: ['./button-modal.component.css'],
})
export class ButtonModalComponent {

  isMouseOver: boolean = false;
  isModalOpen: boolean = false;


  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  openModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  onMudouValor(evento: any) {
    this.isModalOpen = !evento;
  }

}
