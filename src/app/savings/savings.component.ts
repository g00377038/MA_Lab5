import { Component, OnInit } from '@angular/core';
import {InterestService} from '../Services/interest.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private myService:InterestService) { }

  ngOnInit(): void {
  }

  Total: number=0;
  years: number;
  


  calculateinterest(): void 
  {
    this.Total = this.myService.calculateinterest(this.years);  
  }

}
