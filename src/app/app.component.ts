import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() : void {
    // console.log("AAAA")
  }
  
  userList = new Array();
  todoList = new Array();
  arrStatus = ["Done", "In process", "Paused", "Preparing"]
  // init data
}
