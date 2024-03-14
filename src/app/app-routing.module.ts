import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserUpserComponent } from './user/user-upser/user-upser.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: "", component: UserUpserComponent },
  { path: "user-list", component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
