import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input('status') status: boolean = false;
  constructor(){
    console.log("status inside sidebar",this.status);
  }
    
}
