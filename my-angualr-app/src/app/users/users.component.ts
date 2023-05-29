import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  // using template url for external html file
  //templateUrl: './users.component.html',
  // using template means html code
  template : '<app-user></app-user><app-user></app-user>',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

}
