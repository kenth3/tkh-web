import {inject} from 'aurelia-framework';
import {BlogService} from './services/BlogService';

@inject(BlogService)
export class BlogSinglePost {
    constructor(private blogService: BlogService) {
        
    }

    content: string = ''

    activate(params) {
        let postTitle = params.title;
        this.blogService.getPost(postTitle)
            .then(content => {
                this.content = content; 
            });
    }
}