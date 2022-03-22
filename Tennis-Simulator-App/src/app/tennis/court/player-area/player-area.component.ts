import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerAreaDirection } from '../../models/player-area';

@Component({
  selector: 'app-player-area',
  templateUrl: './player-area.component.html',
  styleUrls: ['./player-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerAreaComponent implements OnInit {
  @Input() direction?: PlayerAreaDirection;
  baseCourtLineMapper = {
    'top': 'bottom-line',
    'bottom': 'top-line'
  };
  baseCourtLine?: string | undefined;

  constructor() { }

  ngOnInit(): void {
    if (this.direction) {
      this.baseCourtLine = this.baseCourtLineMapper[this.direction];
    }
  }

}
