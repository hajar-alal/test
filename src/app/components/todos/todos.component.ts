import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule,],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todos : ToDo[] = [];
  newToDo: { title: string } = { title: '' };
  constructor(private todoService: ToDoService){}
  ngOnInit(): void {
    this.getToDos()
  }
  getToDos(){
    this.todoService.getTodos().subscribe(todos => {
  console.log('Todos from Firestore:', todos);
  this.todos = todos;
});
  }
  createToDo(): void{
    if (!this.newToDo.title) return;

  const todo = {
    title: this.newToDo.title,
    completed: false
  };

  this.todoService.addTodo(todo).then(() => {
    this.newToDo = {} as ToDo;
  });
  }
  deleteToDo(todoId:string):void{
    this.todoService.deleteTodo(todoId);
  }

}
