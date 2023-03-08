import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  // @Input() isModalOpen: boolean = false;

  @Output() statusModal = new EventEmitter();

  // openModal() {
  //   this.isModalOpen = !this.isModalOpen;
  // }

  // statusAlterado() {
  //   this.isModalOpen = !this.isModalOpen;
  //   this.statusModal.emit({ novoStatus : this.isModalOpen})
  // }

}
