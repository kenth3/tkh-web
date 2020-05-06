import {inject} from 'aurelia-framework';
import {AppState} from './models/AppState';
import {BlogService} from './services/BlogService';
import {BlogPost} from './models/BlogPost';
import {BlogTag} from './models/BlogTag';

@inject(BlogService, AppState)
export class Blog {
    constructor(private blogService: BlogService, private appState: AppState) {
        
    }

    title: string = 'New Post'
    error: string = ''

    post: BlogPost
    categories: string[]
    tags: string[]
    newTag: string = ''
    saved: boolean

    selectCategory(category) {
        this.post.category = category;
    }

    addTag(tag: string, isNew: boolean = false) {
        if (this.post.tags.find(t => t === tag) !== undefined)
            return;

        this.post.tags.push(tag);

        if (isNew)
            this.newTag = '';
    }

    removeTag(tag) {
        let tagIndex = this.post.tags.findIndex(t => t === tag);
        if (tagIndex === -1)
            return;

        this.post.tags.splice(tagIndex);
    }

    save() {
        this.blogService.savePost(this.post)
            .then(status => {
                if (status.success) {
                    this.saved = true;
                } else {
                    this.error = status.error;
                }
            });        
    }
    
    activate(params) {
        let postTitle = params.title;
        if (postTitle !== undefined) {
            this.title = 'Edit Post';
            
            // load the post
            this.blogService
                .getPostForEdit(postTitle)
                .then(post => this.post = post);
        } else {
            this.post = new BlogPost();
        }

        // get categories and tags
        this.blogService
            .getCategories()
            .then(categories => this.categories = categories);

        this.blogService
            .getTags()
            .then(tags => this.tags = tags);
    }

    deactivate() {
        if (!this.saved)
            return;
        
        this.appState.blogPosts = [];
        this.appState.blogCategories = [];
        this.appState.blogTags = [];
    }
}