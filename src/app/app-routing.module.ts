import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ProjectComponent } from './project/project.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'welcome/:name',component:WelcomeComponent},
{path:'todos',component:ListTodosComponent},
{path:'project',component:ProjectComponent},
{path:'customerinfo',component:CustomerCardComponent},
{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }