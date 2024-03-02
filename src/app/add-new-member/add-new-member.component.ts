import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-member',
  standalone: true,
  imports: [FormsModule,InputTextModule,ButtonModule,DropdownModule],
  templateUrl: './add-new-member.component.html',
  styleUrl: './add-new-member.component.css'
})
export class AddNewMemberComponent {
  constructor(private router:Router){
  }
  name="";
  milkeType:{name:string,value:string}[] = [{name:"Cow",value:"CW"},{name:'Buffalo',value:'BF'}];
  selectedMilkType:{name:string,value:string} = {name:"",value:""};
  save(){
    console.log("inside save");
  }
  cancel(){
    console.log("inside cancel");
    this.router.navigate(['/']);
  }
}
