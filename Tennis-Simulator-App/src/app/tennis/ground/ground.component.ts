import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GroundComponent implements OnInit {

  @Input() courtType: 'grass-court' | 'clay-court' | 'synthetic-court' = 'grass-court';

  constructor() { }

  ngOnInit(): void {
  }

}
