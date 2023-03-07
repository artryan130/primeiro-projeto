import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-projeto';

  nomeDoCurso: string = 'angular';

  valorContador: number = 11;

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
