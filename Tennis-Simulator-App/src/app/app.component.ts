import { Component } from '@angular/core';
import { CourtType } from './tennis/models/court-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tennis-Simulator-App';
  selectedCourtType: CourtType  = 'grass';

  courtChange(newCourtType: CourtType) {
    this.selectedCourtType = newCourtType;
  }
}
