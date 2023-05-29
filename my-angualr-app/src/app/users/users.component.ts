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
  userCreatedStatus = 'No User is created'
  name = ''

  constructor() {
    //added this check property binding
    // property binding denotes by []
    setTimeout(() => {
      this.allowNewUser = true;
    },3000)
  }

  changeUserCreatedStatus () {
    this.userCreatedStatus = 'user is created'
  }

  onUpdateuser(e: Event) {
    //below is doing typcasting cause event could be of click(any) type as well
    this.name = (e.target as HTMLInputElement).value
    console.log((e.target as HTMLInputElement).value)
  }

}
