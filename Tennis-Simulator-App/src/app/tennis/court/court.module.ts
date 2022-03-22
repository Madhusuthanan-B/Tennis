import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtComponent } from './court.component';
import { PlayerAreaComponent } from './player-area/player-area.component';

@NgModule({
    declarations: [
        CourtComponent, PlayerAreaComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [CourtComponent, PlayerAreaComponent]
})
export class CourtModule { }
