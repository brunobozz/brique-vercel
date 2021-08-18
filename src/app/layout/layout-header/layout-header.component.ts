import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/auth/account.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent implements OnInit {
  public auth = false;

  constructor(private router: Router, private accountService: AccountService) {
    router.events.subscribe(() => {
      this.verificaAuth();
    });
  }

  ngOnInit(): void {
    this.verificaAuth();
  }

  public verificaAuth() {
    const token = window.localStorage.getItem('token');
    if (token) {
      this.auth = true;
    } else {
      this.auth = false;
    }
  }

  async logout() {
    try {
      const result = await this.accountService.logout();
      if (result === true) {
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
