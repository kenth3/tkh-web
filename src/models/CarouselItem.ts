export class CarouselItem {
    constructor(text?: string, image?: string) {
        if (text)
            this.text = text;

        if (image)
            this.image = image;
    }

    text: string
    image: string
    current: boolean = false
}