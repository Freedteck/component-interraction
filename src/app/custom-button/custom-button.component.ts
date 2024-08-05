import { Component, Input } from '@angular/core';
import { NgxSemanticModule } from 'ngx-semantic';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [NgxSemanticModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  @Input() id!: string;
  @Input() text!: string;
  @Input() emphasis!: any;
}
