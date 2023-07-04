import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SolarSystemComponent } from './components/solar-system/solar-system.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AnimatedSliderComponent } from './components/animated-slider/animated-slider.component';

const primengModules = [
  DropdownModule
]



@NgModule({
  declarations: [
    HomeComponent,
    SolarSystemComponent,
    AnimatedSliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...primengModules
  ]
})
export class AllAnimationsModule { }
