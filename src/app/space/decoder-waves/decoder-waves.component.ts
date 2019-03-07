import * as mastermind from 'numeric-mastermind-solver-js';
import { Component, OnInit } from '@angular/core';


export interface INumber {
  numbers: string;
}

export interface IResult {
  number: string;
  pins:string[]
}


@Component({
  selector: 'app-decoder-waves',
  templateUrl: './decoder-waves.component.html',
  styleUrls: ['./decoder-waves.component.css']
})
export class DecoderWavesComponent implements OnInit {

  resultList?:IResult[] = [];
  solution :string = "3235";

  constructor() { }



  checkNumber(formValues: INumber) {
    let res = mastermind.matchPins(this.solution, formValues.numbers);

    let res2:any[] = [];

    for (var _i = 0; _i < res.green; _i++) {

      res2.push("G");
  }

  for (var _i = 0; _i < res.blue; _i++) {

    res2.push("B");
}



    this.resultList.push({number:formValues.numbers, pins: res2 });
  }
  ngOnInit() {


  }

}
