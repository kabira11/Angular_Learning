import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

})

export class UserComponent {
  username : string = "Pankaj"
  userId : number = 11;
  userStatus : string = "Online"
// string interploation metod and variables
  getUser () {
    return this.username
  }
}
