import {bindable} from 'aurelia-framework';
import {CarouselItem} from '../../models/CarouselItem';

export class Carousel {
  @bindable items: CarouselItem[]
  @bindable time: number = 5000
  @bindable timer: boolean = true

  currentIndex: number

  previous(stopTimer?: boolean) {
    this.navigate(-1, stopTimer);
  }

  next(stopTimer?: boolean) {
    this.navigate(1, stopTimer);
  }

  navigate(direction: number, stopTimer?: boolean) {
    if (stopTimer === true)
      this.timer = false;

    if (!this.items[this.currentIndex])
      return;

    this.items[this.currentIndex].current = false;
    this.currentIndex += direction;
    
    if (direction === -1 && this.currentIndex < 0)
      this.currentIndex = this.items.length - 1;
    
    if (direction === 1 && !this.items[this.currentIndex])
      this.currentIndex = 0;

    this.items[this.currentIndex].current = true;
  }

  itemsChanged() {
    this.currentIndex = 0;
    this.navigate(0);
  }

  attached() {
    this.itemsChanged();

    // set the timer between image switches
    console.log('setting carousel timer');

    setInterval(() => {
      console.log('timer hit.  timer:' + this.timer);
      if (this.timer) this.next(); 
    }, this.time);
  }

  valueChanged(newValue, oldValue) {

  }
}

