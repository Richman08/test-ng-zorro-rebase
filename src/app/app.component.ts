import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  theme = true;
  array = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {
  }
}
