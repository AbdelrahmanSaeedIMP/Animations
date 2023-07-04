import { Component } from '@angular/core';
import { spin } from '../../services/animations/animations.service';

@Component({
  selector: 'app-solar-system',
  templateUrl: './solar-system.component.html',
  styleUrls: ['./solar-system.component.scss'],
  animations: [spin]
})
export class SolarSystemComponent {
  mercuryState: string = '*'
  venusState: string = '*'
  earthState: string = '*'
  marsState: string = '*'
  jupiterState: string = '*'
  saturnState: string = '*'
  uranusState: string = '*'
  neptuneState: string = '*'
}
