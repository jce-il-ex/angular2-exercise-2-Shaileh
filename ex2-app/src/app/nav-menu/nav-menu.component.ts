import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {


  buttons=[{id:1 ,label:'Home'},{id:2,label:"News"},{id:3,label:"Contact"},{id:4,label:"About"}];

  constructor() { }

  ngOnInit() {
  }

}
