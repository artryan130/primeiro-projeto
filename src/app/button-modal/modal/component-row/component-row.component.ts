import { Component } from '@angular/core';

@Component({
  selector: 'component-row',
  templateUrl: './component-row.component.html',
  styleUrls: ['./component-row.component.css']
})
export class ComponentRowComponent {

  arrayDeObjetos = [
    {"nome":'Arthur' , "reserva":"001","data":'01/05/2023',"ativo": true},
    {"nome":'Lucas' , "reserva":"002","data":'06/05/2023',"ativo": false},
    {"nome":'Pedro' , "reserva":"003","data":'03/04/2023',"ativo": true},
    {"nome":'Marcos' , "reserva":"004","data":'02/05/2023',"ativo": true},
    {"nome":'Luiza' , "reserva":"005","data":'10/05/2023',"ativo": false},
    {"nome":'Marta' , "reserva":"006","data":'12/06/2023',"ativo": true}
  ];

  onMudouChecked(values:any):void {
    // this.arrayDeObjetos[0].ativo = values.currentTarget.checked;
    console.log(values.currentTarget.checked)
  }
}

