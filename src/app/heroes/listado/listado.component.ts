import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  mostrarHeroeBorrado: boolean = false;
  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
    if (this.heroeBorrado === '') {
      this.mostrarHeroeBorrado = false;
    } else {
      this.mostrarHeroeBorrado = true;
    }
  }
}
