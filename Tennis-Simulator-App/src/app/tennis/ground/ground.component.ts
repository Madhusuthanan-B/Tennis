import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CourtType } from '../models/court-type';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroundComponent implements OnInit {

  @Input() courtType: CourtType = 'grass';

  constructor() { }

  ngOnInit(): void {
  }

}
