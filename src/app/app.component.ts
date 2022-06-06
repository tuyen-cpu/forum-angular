import { Observable, Subscription } from 'rxjs';
import { User } from './shared/user.model';
import { UserService } from './shared/service/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'forum';
  user: User;
  private userSubscription: Subscription;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.userSubscription = this.userService.userChanged.subscribe((data) => {
      console.log(data);
      this.user = this.userService.getUser();
    });
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  logout() {
    this.userService.logout();
  }
}
