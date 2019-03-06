import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.css']
})
export class PlanetDetectorComponent implements OnInit {

  imageUrl: string = "assets/noice.jpg"
  x:number = 185;
  y:number = 164;


  distance = 0.5;

  constructor() { }

  update(position:any) {
    //console.log("x: " + position.x + " y: " + position.y);
   // console.log(this.IsClose(position));

    const max=225;

  this.distance = 1-((max/this.IsClose(position))/10);
  console.log(this.distance);
  }

  IsClose(currentPosition:any){
    const dx = currentPosition.x - this.x;
    const dy = currentPosition.y - this.y;
    return Math.sqrt(dx*dx + dy*dy);
  }


  ngOnInit() {
  }

}
