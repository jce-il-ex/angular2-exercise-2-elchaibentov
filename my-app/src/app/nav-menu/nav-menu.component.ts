import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  list = [
    {id:1, text:'HOME'},
    {id:2, text:'FIRST PAGE'},
    {id:3, text:'ABOUT'},
    {id:4, text:'CONTACT'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
