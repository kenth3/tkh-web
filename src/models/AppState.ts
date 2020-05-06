import {BlogPost} from './BlogPost';

export class AppState {
    
    blogPosts: BlogPost[] = [];
    blogSelectedCategory: string = '';
    blogSelectedTag: string = '';
    blogCategories: string[] = [];
    blogTags: string[] = [];

    loggedIn: boolean = false

    getBlogPost (file) {
        if (!this.blogPosts.length) 
            return null;

        let post = this.blogPosts.find(post => post.file === file);
        return post;
    }

    isLoggedIn() {
        return localStorage.getItem("authToken") !== undefined && localStorage.getItem("authToken") !== null;
    }
}