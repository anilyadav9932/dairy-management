import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RightLayoutComponent } from './right-layout/right-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebarComponent,RightLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dairy-management-poc';
  status:boolean = false;
  getSideBarStatus(updateStates:boolean){
  this.status = updateStates;
  console.log("updated side bar status",this.status);
  }
}
