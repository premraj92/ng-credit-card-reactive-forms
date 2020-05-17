import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.css']
})
export class CardDisplayComponent implements OnInit {

  @Input() cardNumber: string;
  @Input() name: string;
  @Input() expiration: string;

  constructor() { }

  ngOnInit(): void {
  }

}
