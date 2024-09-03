// Angular Import
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavSearchComponent {
  // public props
  searchOn = false;
}
