import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  // using template url for external html file
  templateUrl: './users.component.html',
  // using template means html code
  //template : '<app-user></app-user><app-user></app-user>',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  allowNewUser = false;

  constructor() {
    //added this check property binding
    // property binding denotes by []
    setTimeout(() => {
      this.allowNewUser = true;
    },3000)
  }

}
