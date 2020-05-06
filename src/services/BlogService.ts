import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Config} from '../config';
import {AppState} from '../models/AppState';
import {BlogPost} from '../models/BlogPost';

@inject(HttpClient, Config)
export class BlogService {
    constructor(private httpClient: HttpClient, private config: Config, private appState: AppState) {
        this.httpClient.configure(c => {
            c.withBaseUrl(this.config.baseUrl);
        });
    }

    getPosts(category?: string, tag: string = '') {
        let path = '/posts';

        if (tag !== '')
            path += '/tag/' + tag;
        
        if (category && category !== 'All') 
            path += '/category/' + category;
            
        console.log(`calling posts with path: ${path}`);
        
        return this.httpClient.get(path)
            .then(data => {
                let posts = JSON.parse(data.response);
                for (let post of posts) {
                    post.postDate = new Date(post.postDate);
                }

                return posts;
            });
    }

    getPost(postTitle: string) {
        // this needs to be html
        return this.httpClient.createRequest('/post/' + postTitle)
            .asGet()
            .withHeader('Content-Type', 'application/html')
            .send()
            .then(data => data.response);
    }

    getPostForEdit(postTitle: string) {
        // this needs the token

        return this.httpClient.createRequest('/post/' + postTitle + '/edit')
            .asGet()
            .withHeader('Authorization', 'Bearer ' + localStorage.getItem('authToken'))
            .send()
            .then(data => JSON.parse(data.response));
    }

    savePost(post: BlogPost) {
        // this needs the token
        return this.httpClient.createRequest('/post')
            .asPost()
            .withHeader('Authorization', 'Bearer ' + localStorage.getItem('authToken'))
            .withContent(post)
            .send()
            .then(data => {
                let response = JSON.parse(data.response);
                return response;
            })
            .catch(reason => {
                if (reason.statusCode === 401) { 
                    return { success: false, error: "Not authorized to make this request" };
                } else {
                    return { success: false, error: reason.statusText };
                }
            });
    }

    getCategories() {
        return this.httpClient.get('/categories')
            .then(data => JSON.parse(data.response));
    }

    getTags() {
        return this.httpClient.get('/tags')
            .then(data => JSON.parse(data.response));
    }
}