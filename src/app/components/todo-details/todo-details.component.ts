import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../Models/to-do';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoService } from '../../Services/to-do.service';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss'
})
export class TodoDetailsComponent implements OnInit {

  todo!: ToDo;

  constructor(
    private route: ActivatedRoute,
    private todoService: ToDoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.todoService.getTodoById(id).subscribe(todo => {
      this.todo = todo;
    });
  }

  updateTodo(): void {
    if (this.todo) {
      this.todoService.updateTodo(this.todo);
      this.router.navigate(['/todos']);
    }
  }
}