import { Component, OnInit } from '@angular/core';
import { navdata } from '../data/nav-data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  items=navdata;

  constructor() { }

  ngOnInit() {
  }

}
