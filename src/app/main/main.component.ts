import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TodoService } from "../todo.service";

import { Router, ActivatedRoute, Route } from "@angular/router";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  public todos;
  public todoSubscription: Subscription;

  constructor(private todoService: TodoService, private router: Router,) { }

  public todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('',  Validators.required),
   
  });

  addTodo(formData: FormData){
   //console.log("DATA")
    this.todoService.addTodo(formData);
    this.todoForm.reset();
    //refetch the data from mongo
   
    //this.getTodos();
   
  }

  getTodos(){
    this.todoSubscription = this.todoService.getAllTodos().subscribe(todos => {
      this.todos = todos["data"];
    });
  }

  delete(todoId: string) {
    this.todoService.deleteTodo(todoId)
    //refetch the data from mongo
    //this.getTodos();
   
    
  }
  ngOnInit() {
    this.getTodos();
  }

  ngOnDestroy(){
    if(this.todoSubscription !== undefined){
      this.todoSubscription.unsubscribe()
    }
    
  }

}
