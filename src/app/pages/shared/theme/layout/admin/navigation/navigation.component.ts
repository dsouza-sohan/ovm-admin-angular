// Angular Import
import { Component, EventEmitter, Output } from '@angular/core';
import { NavContentComponent } from './nav-content/nav-content.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule,NavContentComponent]
})
export class NavigationComponent {
  // public props
  windowWidth: number;
  @Output() NavMobCollapse = new EventEmitter();

  // constructor
  constructor() {
    this.windowWidth = window.innerWidth;
  }

  // public method
  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.NavMobCollapse.emit();
    }
  }
}
