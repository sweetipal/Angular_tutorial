import { Component } from '@angular/core';
import { TodosComponent } from './MyComponents/todos/todos.component';

@Component({
  selector: 'app-root',
  imports: [TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sp-todo-list';
  // constructor(){
  //   setTimeout(() =>{
  //     this.title = "Changed Title";
  //   },2000)
  // }
  
}
