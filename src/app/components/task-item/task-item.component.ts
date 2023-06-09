import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
//import { faco more content}

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  @Input() task!: Task;
  faTimes = faTimes;
  constructor() {}
  ngOnInit(): void {}
}
