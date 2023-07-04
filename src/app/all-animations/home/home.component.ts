import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  options = [
    {
      id: 1,
      name: 'Solar System'
    },
    {
      id: 2,
      name: 'Animated Image Slider'
    },
  ]
  selectedOption: any = {
    id: 1,
    name: 'Solar System'
  };
}
