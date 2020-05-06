import {inject} from 'aurelia-framework';
import {AppState} from './models/AppState';
import {BlogService} from './services/BlogService';
import {BlogPost} from './models/BlogPost';
import {BlogTag} from './models/BlogTag';

@inject(BlogService, AppState)
export class Blog {
    constructor(private blogService: BlogService, private appState: AppState) {
        
    }

    loggedIn: boolean
    posts: BlogPost[]
    categories: string[]
    tags: string[]

    selectedCategory: string
    selectedTag: string

    selectCategory(category) {
        this.selectedTag = '';
        this.selectedCategory = category;
        this.loadPosts();
    }

    selectTag(tag) {
        this.selectedCategory = 'All';
        this.selectedTag = tag;
        this.loadPosts();
    }

    loadPosts() {
        this.blogService
            .getPosts(this.selectedCategory, this.selectedTag)
            .then(posts => this.posts = posts);
    }

    loadCategories() {
        this.blogService
            .getCategories()
            .then(categories => {
                this.categories = categories;
                this.categories.unshift('All');
            });
    }

    loadTags() {
        this.blogService
            .getTags()
            .then(tags => this.tags = tags);
    }

    activate(params) {    
        this.loggedIn = this.appState.isLoggedIn();

        this.selectedCategory = this.appState.blogSelectedCategory !== '' ? this.appState.blogSelectedCategory : 'All';
        this.selectedTag = this.appState.blogSelectedTag;

        if (this.appState.blogPosts.length) {
            this.posts = this.appState.blogPosts;
        } else {
            this.loadPosts();
        }

        if (this.appState.blogCategories.length) {
            this.categories = this.appState.blogCategories;
        } else {
            this.loadCategories();
        }

        if (this.appState.blogTags.length) {
            this.tags = this.appState.blogTags;
        } else {
            this.loadTags();
        }
    }

    deactivate() {
        this.appState.blogPosts = this.posts;
        this.appState.blogCategories = this.categories;
        this.appState.blogSelectedCategory = this.selectedCategory;
        this.appState.blogSelectedTag = this.selectedTag;
    }
}