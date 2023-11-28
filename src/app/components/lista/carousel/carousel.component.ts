import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [

  ]
})
export class CarouselComponent implements OnInit, OnDestroy {
  timer!: Subscription;

  @Input() images: string[] = [];

  _indexActiveImage: number = 0;

  get indexActiveImage(): number {
    return this._indexActiveImage;
  }

  set indexActiveImage(value: number) {
    this._indexActiveImage = value < this.images.length ? value : 0;
  }

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  startTimer(): void {
    this.timer = timer(7000).subscribe(() => {
      this.activateImage(this.indexActiveImage + 1
      );
    });
  }

  stopTimer(): void {
    this.timer?.unsubscribe();
  }

  activateImage(index: number): void {
    this.indexActiveImage = index;
    this.stopTimer();
  }
}
