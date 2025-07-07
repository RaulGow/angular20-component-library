import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-label',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {

  /** ID del control con el que se vincula el label */
  @Input() for: string = '';

  /** Texto del label. Si no se usa, se puede proyectar contenido con ng-content */
  @Input() text: string = '';

  /** Opcional: estilos por tamaño */
  @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';

  /** Opcional: marca el label como obligatorio visualmente */
  @Input() required: boolean = false;

  /** Cambia el color del label según el contexto */
  @Input() context: 'input' | 'dropdown' | 'standalone' = 'standalone';

  /** Controlar focus del componente */
  @Input() isFocused = false;

}
