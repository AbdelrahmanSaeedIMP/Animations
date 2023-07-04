import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fade } from '../../services/animations/animations.service';

@Component({
  selector: 'app-animated-slider',
  templateUrl: './animated-slider.component.html',
  styleUrls: ['./animated-slider.component.scss'],
  animations: [fade]
})
export class AnimatedSliderComponent implements OnInit {
  imgIdx = 0
  imgUrls = [
    'https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg'
  ]

  @ViewChild('myImg', { static: true }) myImg!: ElementRef;

  ngOnInit(): void {
    this.repeat()
  }

  repeat() {
    setTimeout(() => {
      this.changeCurrentImg()
      this.repeat()
    }, 3200);
  }

  show: boolean = true;

  changeCurrentImg() {
    this.show = false
    setTimeout(() => {
      this.show = true
      this.imgIdx = (this.imgIdx + 1) % this.imgUrls.length
    }, 100);

  }
}
