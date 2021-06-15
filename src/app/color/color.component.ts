import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors = ['red', 'green', 'blue'];
  color ="red";
  constructor() { }

  ngOnInit(): void {
  }
  change(color: string){
    this.color = color;
  }
}
