import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignuComponent implements OnInit {
    constructor(private router: Router) { }


     ngOnInit() { }


  onSignup() {
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/dashboard']);
}
}
