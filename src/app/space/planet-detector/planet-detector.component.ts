import { Component, OnInit } from '@angular/core';

interface IPosition {
  X:number,
  Y:number
}

@Component({
  selector: 'app-planet-detector',
  templateUrl: './planet-detector.component.html',
  styleUrls: ['./planet-detector.component.css']
})
export class PlanetDetectorComponent {

  imageUrl: string = "assets/noice.jpg"
  x:number = 185;
  y:number = 164;
  distance = 0.9;

  found = false;
  private context: any;

  constructor() {

   this.generatePlanetPosition();
  }

  generatePlanetPosition() {


      this.x =  Math.floor(Math.random() * 303),
      this.y = Math.floor(Math.random() * 161)

  }


  drawPlanet() {
    this.found=true;
    console.log("Works")
    const canvas = <HTMLCanvasElement>document.getElementById('test');

    this.context = canvas.getContext('2d');
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.context.beginPath();
    this.context.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    this.context.fill();
    this.context.stroke()


  }

  draw(position:IPosition) {
    const canvas = <HTMLCanvasElement>document.getElementById('test');

    this.context = canvas.getContext('2d');
    this.context.clearRect(0, 0, canvas.width, canvas.height);

    var img = new Image();
    img.src=this.imageUrl;
    this.context.drawImage(img, 0, 0);



    this.context.beginPath();
    this.context.strokeStyle = "red"
    this.context.lineCap = "round";
    this.context.moveTo(0, position.Y);
    this.context.lineTo(300, position.Y);
    this.context.stroke();

    this.context.beginPath();
    this.context.strokeStyle = "red"
    this.context.lineCap = "round";
    this.context.moveTo(position.X, 0);
    this.context.lineTo(position.X, 300);
    this.context.stroke();



    window.requestAnimationFrame(() => this.draw(position));


  }

  update(position:IPosition) {
    const max:number=225;
    this.distance = 1-((max/this.IsClose(position))/10);
    this.draw(position);
  }

  IsClose(currentPosition:IPosition){
    const dx = currentPosition.X - this.x;
    const dy = currentPosition.Y - this.y;
    return Math.sqrt(dx*dx + dy*dy);
  }
}
