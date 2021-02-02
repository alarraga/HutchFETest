import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserMenuComponent implements OnInit {
    role: string;
    userName: string;
    constructor(private router: Router) { }

    ngOnInit() {
      this.userName = "Alexia";
        this.role = "Admin";
  }
    onSignOut() {
       
    }
}
