export class BlogPost {
    name: string = ''
    file: string = ''
    html: boolean = false
    postDate: Date = new Date()
    category: string = ''
    tags: string[] = []
    preview: string = ''
    fullContent: string = ''
}