import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {AppState} from './models/AppState';
import {UserService} from './services/UserService';

@inject(UserService, Router, AppState)
export class Login {
    constructor(private userService: UserService, private router: Router, private appState: AppState) {

    }

    message: string
    error: string
    userName: string
    password: string
    loggedIn: boolean

    login() {
        this.userService
            .login(this.userName, this.password)
            .then(status => {
                if (status.success) {
                    // if successful, set 
                    localStorage.setItem("authToken", status.token);
                    
                    this.loggedIn = this.appState.isLoggedIn();
                    this.userName = '';
                    this.password = '';
                    
                    // uncomment this if you need to show / hide nav buttons based on login state
                    // history.go(0);      // this is the ONLY @#$#@$%@$%# way I can find to get the @#$*#$@%&!@*#$ nav bar to update

                } else {
                    this.error = status.error;
                }
            });
    }

    logout() {
        localStorage.removeItem("authToken");
        this.loggedIn = this.appState.isLoggedIn();
        
        // uncomment this if you need to show / hide nav buttons based on login state
        // history.go(0);
    }

    activate() {
        this.loggedIn = this.appState.isLoggedIn();
    }
}