// Angular Import
import { Component } from '@angular/core';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss'],
  standalone: true,
  imports: [NavSearchComponent, CommonModule]
})
export class NavLeftComponent {}
