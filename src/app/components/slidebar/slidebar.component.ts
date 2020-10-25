import { Movies } from './../../Models/movies';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.scss']
})
export class SlidebarComponent implements OnInit {

  @Input() sliderConfig;
  @Input() movies : Movies;
  @Input() title : string;

  constructor() { }

  ngOnInit(): void {
  }

}
