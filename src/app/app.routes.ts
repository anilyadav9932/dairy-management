import { Routes } from '@angular/router';
import { AddNewMemberComponent } from './add-new-member/add-new-member.component';

export const routes: Routes = [
    {path: 'addNewMem', component:AddNewMemberComponent},
    // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];
