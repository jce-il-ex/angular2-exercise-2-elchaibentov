import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() item;//import 

  message() {
    alert("Item number " + this.item.id + ", named " + this.item.text);
  }
  constructor() { }

  ngOnInit() {
  }

}
