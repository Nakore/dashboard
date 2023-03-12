import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nakore';

  constructor(private router: Router, private authService: AuthService) {}

  public get showDash(): boolean {
    let fullRoutes = ['/', '/login'];
    return !fullRoutes.includes(this.router.url);
  }
}
