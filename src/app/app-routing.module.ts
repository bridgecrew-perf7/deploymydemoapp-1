import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomationComponent } from './automation/automation.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
{path:'automation', component: AutomationComponent},
{path:'data-science', component: DataScienceComponent},
{path:'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

