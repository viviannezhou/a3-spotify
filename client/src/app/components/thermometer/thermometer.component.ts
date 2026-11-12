import { Component, OnInit, Input } from '@angular/core';
import { Popularity } from 'src/app/data/popularity';

@Component({
    selector: 'app-thermometer',
    templateUrl: './thermometer.component.html',
    styleUrls: ['./thermometer.component.css'],
    standalone: false
})
export class ThermometerComponent implements OnInit {
  //the popularity to display (has the percent and color), passed in from the page using this component.
  @Input() popularity:Popularity;

  constructor() { }

  ngOnInit() {
  }

}
