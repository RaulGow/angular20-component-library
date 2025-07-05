import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  standalone: true,  // <-- Añádelo aquí
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() label = 'Button';
  @Input() color: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
