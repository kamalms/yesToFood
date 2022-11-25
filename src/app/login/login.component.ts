import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  rawjdvn: string = ' '
  raw4s4t: string = ' '
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  authApp() {
    this.router.navigate(['products']);
  }

}
