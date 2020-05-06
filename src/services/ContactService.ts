import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Config} from '../config';
import {AppState} from '../models/AppState';
import {ContactItem} from '../models/ContactItem';

@inject(HttpClient, Config)
export class ContactService {
    constructor(private httpClient: HttpClient, private config: Config, private appState: AppState) {
        this.httpClient.configure(c => {
            c.withBaseUrl(this.config.baseUrl);
        });
    }

    sendMessage(contact: ContactItem) {
        return this.httpClient.createRequest('/contact')
            .asPost()
            .withContent(contact)
            .send()
            .then(data => {
                let response = JSON.parse(data.response);
                return response;
            })
            .catch(reason => {
                return { success: false, error: reason.statusText };
            });
    }
}