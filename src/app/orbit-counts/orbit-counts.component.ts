import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  satelliteTypes : Object =  
    { 
    'Satellites': 9,
    'Space Debris': 1, 
    'Communication': 2, 
    'Probe': 2, 
    'Telescope': 1, 
    'Positioning': 1, 
    'Space Station': 2,
  };

  satellitesArray : string[] = ['Satellites','Space Debris', 'Communication', 'Probe', 'Telescope', 'Positioning', 'Space Station']; 
  
  constructor() { }

  ngOnInit() {
  }
 /* Didn't Pass in displayList via [satellites]="displayList"?*/
}
