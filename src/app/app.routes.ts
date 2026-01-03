import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'/todos', pathMatch:'full'},
    {path:'home', component: HomeComponent, title:'Home'},
    {path:'todos', component: TodosComponent, title:'todos'},
    {path:'todos/:id', component: TodoDetailsComponent, title:'to do Details'},
    {path:'contactus', component: ContactusComponent, title:'contact Us'},
    {path:'aboutUs', component: AboutusComponent, title:'AboutUs'},
    {path:'**', component: NotFoundComponent, title:'Not Found'},


];
