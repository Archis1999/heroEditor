import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  constructor() { }
  title = 'New editor'

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    place: 'Kothrud',
    twoWayBindText: ''
  };
  
  ngOnInit() {
  }

}
