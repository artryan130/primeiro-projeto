import { Component, Input } from '@angular/core';

@Component({
  selector: 'nomeCurso',
  templateUrl: './nome-curso.component.html',
  styleUrls: ['./nome-curso.component.css']
})
export class NomeCursoComponent {

  @Input() nome: string = '';


}
