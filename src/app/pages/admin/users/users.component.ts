import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  usersSubscription: Subscription | undefined;
  users: Array<User>=[];
  
  constructor(private us: UserService){
  }

  ngOnInit(): void {
      this.getUsers();
      console.log(this.users);
  }

  getUsers(){
    this.us
    .getAll()
    .forEach((_users: User[ ])=>{
      this.users.push(..._users);

    })
  }

  deleteUser(id: string){
    this.us.delete(id);
  }
}
