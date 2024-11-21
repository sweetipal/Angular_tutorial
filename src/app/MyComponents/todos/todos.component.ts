import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
//  standalone: true,  // Mark this component as standalone (if Angular 14+)
  imports: [CommonModule],  // Add CommonModule to imports for *ngFor and *ngIf
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [
    {
      sno: 1,
      title: "This is title",
      desc: "This is desc",
      active: true
    },
    {
      sno: 2,
      title: "This is title",
      desc: "This is desc",
      active: true
    },
    {
      sno: 3,
      title: "This is title",
      desc: "This is desc",
      active: true
    }
  ];
}
