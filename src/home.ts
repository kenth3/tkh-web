import {CarouselItem} from './models/CarouselItem';

export class Home {
    constructor() {

        this.carouselItems = [
            new CarouselItem("Kent with Bassoon", "img/kent-with-bassoon.jpg"),
            new CarouselItem("Boulder Bassoon Quartet in Japan", "img/qtet-in-japan.jpg"),
            new CarouselItem("BBQ on Denver Billboard", "img/qtet-on-denver-billboard.jpg")
        ];
    }

    carouselItems: CarouselItem[]    
}