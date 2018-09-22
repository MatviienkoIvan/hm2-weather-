import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  @Input() public hotels: Hotel[];
  @Input() public currentHotel: Hotel;
  @Output() public hotel: EventEmitter<Hotel> = new EventEmitter();

  constructor() { }
  public ngOnInit(){
  }
  public selectHotel(hotel: Hotel){
    this.currentHotel = hotel;
  }
}
