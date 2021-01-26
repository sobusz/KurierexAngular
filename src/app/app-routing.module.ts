import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: "form",
    component: UserFormComponent
  },
  {
    path: "**",
    component: MainpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
