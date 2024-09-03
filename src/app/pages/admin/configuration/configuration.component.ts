// Angular Import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  standalone: true,
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
  imports: [CommonModule]
})
export class ConfigurationComponent {}
