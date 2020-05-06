import { RouterConfiguration, Router, Redirect } from "aurelia-router";
import { inject } from "aurelia-framework";
import { AppState } from "./models/AppState";
import "jquery";

@inject(AppState)
export class App {
  constructor(private appState: AppState) {}

  year: number = new Date().getFullYear();
  email: string = "thomaskenthurd@gmail.com";
  router: Router;

  visitedWorks: boolean = false;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Thomas Kent Hurd";
    config.addPipelineStep("postcomplete", PostCompleteStep);
    config.addPipelineStep("authorize", AuthorizeStep);
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: "./home",
        nav: true,
        title: "Home",
      },
      { route: "bio", name: "bio", moduleId: "./bio", nav: true, title: "Bio" },
      {
        route: "bassoon",
        name: "bassoon",
        moduleId: "./bassoon",
        nav: true,
        title: "Bassoon",
      },
      {
        route: "works",
        name: "works",
        moduleId: "./works",
        nav: true,
        title: "Works",
      },
      {
        route: "blog",
        name: "blog",
        moduleId: "./blog",
        nav: true,
        title: "Blog",
      },
      {
        route: "contact",
        name: "contact",
        moduleId: "./contact",
        nav: true,
        title: "Contact",
      },
      {
        route: "blog/:title",
        name: "blogSinglePost",
        moduleId: "./blogSinglePost",
        nav: false,
        title: "Blog Post",
      },
      {
        route: "edit/:title?",
        name: "editBlogPost",
        moduleId: "./editBlogPost",
        nav: false,
        title: "Edit Blog Post",
        auth: true,
      },
      {
        route: "login",
        name: "login",
        moduleId: "./login",
        nav: false,
        title: "Login",
      },
    ]);

    this.router = router;
  }

  attached() {
    // This makes sure the nav-bar collapses if we're on a smaller screen
    // Note: ts checker and au build gulp taks complains about this code,
    //       but this is what works.  If I change the imports above so jquery imports
    //       "$", no complaints are generated from ts or au build, but then the browser
    //       complains that "jquery_1.default" is not a function.
    // $(".navbar-nav li a").click((event: any) => {
    //   // check if window is small enough so dropdown is created
    //   var toggle = $(".navbar-toggle").is(":visible");
    //   if (toggle) {
    //     $(".navbar-collapse").collapse('hide');
    //   }
    // });
  }
}

@inject(AppState)
class AuthorizeStep {
  constructor(private appState: AppState) {}
  run(routingContext, next) {
    if (routingContext.config.auth) {
      if (!this.appState.isLoggedIn())
        return next.cancel(new Redirect("login"));
    }
    return next();
  }
}

// this resets the scroll position to the top when a nav link is pressed
class PostCompleteStep {
  run(routingContext, next) {
    window.scrollTo(0, 0);
    return next();
  }
}
