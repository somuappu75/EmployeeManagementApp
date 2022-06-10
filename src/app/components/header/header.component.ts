import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  About()
  {
    this.route.navigateByUrl("/about") 
  }
  home()
  {
    this.route.navigateByUrl("localhost:4200/") 
  }
}
