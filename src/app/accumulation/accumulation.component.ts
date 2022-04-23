import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accumulation',
  templateUrl: './accumulation.component.html',
  styleUrls: ['./accumulation.component.css']
})
export class AccumulationComponent implements OnInit {

  
  public deposits: number = 0;
  public persent: number = 0;
  public month_amount: number = 0;
  public accumulation: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public calculate(): boolean {
    this.deposits = +((document.getElementById("deposits") as HTMLInputElement).value);
    this.persent = +((document.getElementById("persent") as HTMLInputElement).value);
    this.month_amount = +((document.getElementById("month_amount") as HTMLInputElement).value);
    this.accumulation = this.deposits * this.month_amount * this.persent / 1200;
    return true;
  }
}
