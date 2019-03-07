import { Mastermind } from 'numeric-mastermind-solver-js';
import { Component, OnInit } from '@angular/core';


export interface INumber {
  numbers: number;
}

export interface IResult {
  number: number;
  pins:string[]
}


@Component({
  selector: 'app-decoder-waves',
  templateUrl: './decoder-waves.component.html',
  styleUrls: ['./decoder-waves.component.css']
})
export class DecoderWavesComponent implements OnInit {

  resultList?:IResult[] = [];
  solution :number = 1234;

  constructor() { }



  checkNumber(formValues: INumber) {
    var mm = new Mastermind();
    var guess = mm.getGuess();

    var res = Mastermind.matchPins(this.solution, formValues.numbers);

console.log(res.green);

console.log(res.blue);

     mm.feedPins(res.green, res.blue);

    this.resultList.push({number:formValues.numbers, pins: ["R","B","Z", ""] });
  }
  ngOnInit() {


  }

}
