import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-helper-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './helper-text.component.html',
  styleUrls: ['./helper-text.component.scss']
})
export class HelperTextComponent {

  /** ID del texto de ayuda para enlazarlo desde el control (aria-describedby) */
  @Input() id: string = '';

  /** Texto del helper; si no se usa, se puede proyectar contenido */
  @Input() text: string = '';

  /** Tipo de mensaje */
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';

  /** Tamaño visual del helper text */
  @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';

  /** Contexto visual opcional (input, dropdown, standalone) */
  @Input() context: 'input' | 'dropdown' | 'standalone' = 'input';

  /**
   * Fuerza el helper como visible solo cuando hay error.
   * Útil cuando el padre controla la validación.
   */
  @Input() show = true;

  /** Área viva para avisos accesibles cuando hay error */
  @Input() ariaLive: 'off' | 'polite' | 'assertive' = 'off';
}
