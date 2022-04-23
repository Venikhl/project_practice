import { Component, OnInit } from '@angular/core';
import { Goal } from '../entities/Goal';

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
  public title_goal: string = "";
  public cost_goal: number = 0;
  public months_amount_goal: number = 0;
  public accumulation_amount_goal: number = 0;
  public goals: Goal []=[];

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
  public createGoal(): boolean{
    this.title_goal = (document.getElementById("title_goal") as HTMLInputElement).value;
    this.cost_goal = +(document.getElementById("cost_goal" ) as HTMLInputElement).value;
    this.accumulation_amount_goal = +(document.getElementById("accumulation_amount_goal") as HTMLInputElement).value;
    this.months_amount_goal = this.cost_goal / this.accumulation_amount_goal;
    
    this.goals.push(
      new Goal(
        this.title_goal,
        this.cost_goal,
        this.months_amount_goal,
        this.accumulation_amount_goal
      )
    );
    return true;
  }
}