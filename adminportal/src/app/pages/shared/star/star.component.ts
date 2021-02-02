import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number;
  starWidth: number;
  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 75 / 5;// 75 : width , 5: total star number
    }
   
  constructor() { }

  ngOnInit() {
  }
  
}
