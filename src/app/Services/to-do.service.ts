import { Injectable } from '@angular/core';
import { docData } from '@angular/fire/firestore';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  deleteDoc,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private todosCollection;

  constructor(private firestore: Firestore) {
    this.todosCollection = collection(this.firestore, 'todos');
  }
// 🔹 جلب مهمة واحدة بالـ id
getTodoById(id: string): Observable<ToDo> {
  const todoDoc = doc(this.firestore, `todos/${id}`);
  return docData(todoDoc, { idField: 'id' }) as Observable<ToDo>;
}
  // جلب كل المهام
  getTodos(): Observable<ToDo[]> {
    return collectionData(this.todosCollection, {
      idField: 'id'
    }) as Observable<ToDo[]>;
  }

  // إضافة مهمة
  addTodo(todo: Omit<ToDo, 'id'>) {
    return addDoc(this.todosCollection, todo);
  }

  // تعديل مهمة
  updateTodo(todo: ToDo) {
    const todoDoc = doc(this.firestore,`todos/${todo.id}`);
    return updateDoc(todoDoc, {
      title: todo.title,
      completed: todo.completed
    });
  }

  // حذف مهمة
  deleteTodo(id: string) {
    const todoDoc = doc(this.firestore, `todos/${id}`);
    return deleteDoc(todoDoc);
  }
}