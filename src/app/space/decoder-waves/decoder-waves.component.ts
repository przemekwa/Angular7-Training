
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


    this.resultList.push({number:formValues.numbers, pins: ["R","B","Z", ""] });
  }
  ngOnInit() {


  }

}
