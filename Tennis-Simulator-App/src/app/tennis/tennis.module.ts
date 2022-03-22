import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroundComponent } from './ground/ground.component';
import { CourtModule } from './court/court.module';

@NgModule({
  declarations: [
    GroundComponent
  ],
  imports: [
    CommonModule,
    CourtModule
  ],
  exports: [GroundComponent, CourtModule]
})
export class TennisModule { }
