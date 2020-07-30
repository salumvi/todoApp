import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { crear } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtImput: FormControl;

  constructor(private store: Store) {

    this.txtImput = new FormControl('Nueva acción', Validators.required)
   }

  ngOnInit(): void {
  }
  AgregarAccion(){


    if(this.txtImput.invalid){return;}
    this.store.dispatch(crear({texto: this.txtImput.value}));

    this.txtImput.reset();


  }
}
