import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome() {
    this.router.navigate(['/']);
  }
}
