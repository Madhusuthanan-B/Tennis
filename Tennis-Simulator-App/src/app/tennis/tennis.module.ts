import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroundComponent } from './ground/ground.component';
import { CourtComponent } from './court/court.component';

@NgModule({
  declarations: [
    GroundComponent,
    CourtComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GroundComponent, CourtComponent]
})
export class TennisModule { }
