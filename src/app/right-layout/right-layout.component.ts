import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-right-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,DashboardComponent],
  templateUrl: './right-layout.component.html',
  styleUrl: './right-layout.component.css'
})
export class RightLayoutComponent {
  @Output() onSideBarClick = new EventEmitter<boolean>();
  constructor(private router:Router){
      console.log("router",router)
  }
  status = false;
  addToggle(){
  this.status = !this.status; 
  this.onSideBarClick.emit(this.status);  
}
}
