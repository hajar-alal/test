import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import{FormsModule} from'@angular/forms'
import{ToDo} from '../../Models/to-do';
import { ActivatedRoute, Router } from '@angular/router';

import { ToDoService } from '../../Services/to-do.service';
@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss'
})
export class TodoDetailsComponent implements OnInit{
  todo: ToDo | undefined;
  constructor(private route:ActivatedRoute, private todoService:ToDoService,private router :Router){

  }
  ngOnInit(): void {
      this.getToDo();
  }
  getToDo(){
    const id = String(this.route.snapshot.paramMap.get('id') );
    this.todoService.getToDoById(id).subscribe(todo => {
      this.todo=todo;
    });
  }
  UpdateToDo():void{
    if(this,this.todo){
      this.todoService.updateToDo(this.todo).subscribe(()=>{
        this.router.navigate(['/todos'])
      });
    }
  }

}
