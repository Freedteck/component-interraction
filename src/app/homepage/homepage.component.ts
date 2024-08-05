import { Component } from '@angular/core';
import { NgxSemanticModule } from 'ngx-semantic';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { ButtonProperties } from '../button-properties';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgxSemanticModule, CustomButtonComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  buttonProperties: ButtonProperties[] = [
    { id: '1', text: 'Button 1', emphasis: 'primary' },
    { id: '2', text: 'Button 2', emphasis: 'secondary' },
  ];

  constructor(private toastr: ToastrService) {}
  onClick = (id: string) => {
    this.toastr.success(`Button ${id} is clicked`);
  };
}
