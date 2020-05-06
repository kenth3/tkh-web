var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-router", "aurelia-framework", "./models/AppState", "jquery"], function (require, exports, aurelia_router_1, aurelia_framework_1, AppState_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(appState) {
            this.appState = appState;
            this.year = new Date().getFullYear();
            this.email = "thomaskenthurd@gmail.com";
            this.visitedWorks = false;
        }
        App.prototype.configureRouter = function (config, router) {
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
        };
        App.prototype.attached = function () {
        };
        App = __decorate([
            aurelia_framework_1.inject(AppState_1.AppState),
            __metadata("design:paramtypes", [AppState_1.AppState])
        ], App);
        return App;
    }());
    exports.App = App;
    var AuthorizeStep = (function () {
        function AuthorizeStep(appState) {
            this.appState = appState;
        }
        AuthorizeStep.prototype.run = function (routingContext, next) {
            if (routingContext.config.auth) {
                if (!this.appState.isLoggedIn())
                    return next.cancel(new aurelia_router_1.Redirect("login"));
            }
            return next();
        };
        AuthorizeStep = __decorate([
            aurelia_framework_1.inject(AppState_1.AppState),
            __metadata("design:paramtypes", [AppState_1.AppState])
        ], AuthorizeStep);
        return AuthorizeStep;
    }());
    var PostCompleteStep = (function () {
        function PostCompleteStep() {
        }
        PostCompleteStep.prototype.run = function (routingContext, next) {
            window.scrollTo(0, 0);
            return next();
        };
        return PostCompleteStep;
    }());
});
;
define('text!app.html',[],function(){return "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./css/business-casual.css\"></require><require from=\"./nav-bar\"></require><div class=\"brand\">Thomas Kent Hurd</div><div class=\"address-bar\">Bassoonist | Composer</div><nav-bar router.bind=\"router\"></nav-bar><div class=\"page-host\"><router-view></router-view></div><footer><div class=\"container\"><div class=\"row\"><div class=\"col-lg-12 text-center\"><p>Copyright &copy; Thomas Kent Hurd ${year} </p></div></div></div></footer></template>";});;
define('bassoon',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bassoon = (function () {
        function Bassoon() {
        }
        return Bassoon;
    }());
    exports.Bassoon = Bassoon;
});
;
define('text!bassoon.html',[],function(){return "<template><div class=\"container\"><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><hr><h2 class=\"intro-text text-center\"><strong>BASSOON</strong></h2><hr>Here's a central place to find the ongoing information about bassoon playing, reed making and other related double reed jabbering.<br><br></div></div><div class=\"box\"><div class=\"col-lg-12\"><h3>Recordings</h3><ul><li>SoundCloud:<ul><li><a href=\"https://www.soundcloud.com/kenthurd\">My SoundCloud Page</a> My own stuff, which will continue to be updated.</li><li><a href=\"https://www.soundcloud.com/boulderbassoonquartet\">The Boulder Bassoon Quartet's SoundCloud Page</a> Showcasing the performances of the group of which I am fortunate to be a member. There are a lot of recordings, here, and we'll probably keep adding to them.</li></ul></li><li>YouTube:<ul><li><a href=\"http://www.youtube.com/user/BoulderBassoons/videos?view=0&flow=grid\">Boulder Bassoon Quartet's Channel</a> An increasing collection of videos of some of their performances.</li><li><a href=\"https://www.youtube.com/channel/UCppUVdRSHbv4uhv1RWs6iiA\">Boulder Chamber Orchestra's Channel</a> Selection of videos from the last few seasons of the orchestra. Highlights include <a href=\"https://www.youtube.com/watch?v=gWEs0EnQ8eg\">Brahms' 2nd Piano Concerto</a>, <a href=\"https://www.youtube.com/watch?v=jG8blmwDkeg\">Mozart's 40th Symphony</a> and <a href=\"https://www.youtube.com/watch?v=L5ZBuIMWqOU&t=108s\">Schubert's Unfinished Symphony</a></li><li><a href=\"https://www.youtube.com/watch?v=UHg15S0Gt9E\">Sonate Pian e Forte</a> by Giovani Gabrielli<br>performed by the CU Bassoon Studio<br>conducted by Yoshiyuki Ishikawa</li><li><a href=\"http://youtu.be/ncxO27JupmI\" target=\"_blank\">Canticle of the Earth</a> by Dan Kellogg<br>performed by the CU Bassoon Studio<br>conducted by Allan McMurray</li></ul></li></ul></div></div><div class=\"box\"><div class=\"col-lg-12\"><h3>Reeds</h3><strong>Starting Up Your Reed Factory:</strong><ul><li><a title=\"Starting Up Your Reed Factory – Part 1 – Dial-a-Reed\" href=\"/#/blog/ReedFactory1\">Part 1: Dial-a-Reed</a></li><li><a title=\"Starting Up Your Reed Factory – Part 1 – Dial-a-Reed\" href=\"/#/blog/ReedFactory2\">Part 2: You, Too, Can Be a Journalist</a></li><li><a title=\"Starting Up Your Reed Factory – Part 1 – Dial-a-Reed\" href=\"/#/blog/ReedFactory3\">Part 3: Slowly But Surely</a></li></ul></div></div><div class=\"box\"><div class=\"col-lg-12\"><h3>Practicing</h3><ul><li><a href=\"/#/blog/SlowingDownFigaro\">Slowing Down Figaro - Thoughts on some helpful practice techniques.</a></li></ul></div></div></div></div></template>";});;
define('bio',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Bio = (function () {
        function Bio() {
        }
        return Bio;
    }());
    exports.Bio = Bio;
});
;
define('text!bio.html',[],function(){return "<template><div class=\"container\"><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><hr><h2 class=\"intro-text text-center\"><strong>BIO</strong></h2><hr><img class=\"img-left img-responsive\" src=\"img/front-closeup.jpg\"><hr class=\"visible-xs\">Thomas Kent Hurd has enjoyed a variety of experiences as a bassoonist, performing in the metro area of Phoenix, Arizona, and more recently in the Front Range of Colorado. He is currently Co-Principal Bassoon of the <a href=\"http://www.boulderchamberorchestra.org\" target=\"_blank\">Boulder Chamber Orchestra</a>, and a member of the <a href=\"http://www.boulderbassoons.com\" target=\"_blank\">Boulder Bassoon Quartet</a>  Other appearances in the Front Range of Colorado include the Colorado Ballet Orchestra, the MahlerFest Orchestra, the Denver Philharmonic and the Longmont Symphony.  He held the position of Co-Principal Bassoon with the West Valley Symphony in Phoenix until 2003. He also participated in a variety of freelance opportunities in Phoenix, including appearances with such orchestras as the Phoenix Symphony and the Arizona Opera, as well as with a variety of chamber ensembles for concerts, holidays and weddings.</div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\">In addition to exploring the solo repertoire for the bassoon, he has composed his own works for it, including a bassoon trio, “Excursions”, premiered at Arizona State University, a solo work for bassoon with piano accompaniment, “Three Psalms\", and most recently works specifically for the Boulder Bassoon Quartet, including \"That So Suite\", \"Blueish\", and \"Midnight Shuffle\". The BBQ premiered the first movement of the work, \"So Cliche\", at the IDRS convention in 2011. A number of his works are now <a href=\"http://www.trevcomusicpublishing.com/shopping-cart?page=shop.browse&category_id=191\" target=\"_blank\">available for purchase at TrevCo Music</a>. A recent performance of That So Suite can be <a href=\"http://www.youtube.com/watch?v=hs-LDbOwuLI&amp;feature=share&amp;list=PLQgYPxnXjSh3GMpZ0WRDLPTsyEYABTJ-7\" target=\"_blank\">viewed on YouTube.</a></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\">As a member of the Boulder Bassoon Quartet, Kent has had recorded \"That So Suite\", and \"Blueish\" for the quartet's debut album, <a href=\"https://mkt.com/boulder-bassoon-quartet\" target=\"_blank\">\"From the Opposite Shore\"</a>, which also features works from innovative composers <a href=\"http://paulhansonmusic.com\" target=\"_blank\">Paul Hanson</a> and Dr. Rica Narimoto.</div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\">Also a proficient pianist, Kent has been seen occasionally performing at the piano, including two solo recitals in the mountains of Ouray County in southwestern Colorado. He was also appreciated for his piano skills within the Arizona State bassoon studio, where he was often pressed into accompaniment duties at discount rates. Kent has therefore had the unusual experience of performing both as the soloist and the accompanist of some of the standard bassoon solo works.</div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\">Kent received his bachelor's degree in music performance from Arizona State University in 1997, where he studied with Dr. Jeffrey Lyman, and Jack Rausch. He is currently a master's candidate, having studied at the University of Colorado with Dr. Yoshiyuki Ishikawa. He attended Eastern Music Festival in the summer of 1992, where he studied with Marlene Mazzuca. He has also studied privately with Eric Ludwig.</div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\">Kent resides in Lafayette, Colorado. He is a software developer in his other life, and hits the ski slopes whenever time and finances allow. He lives with his wife, Mindy, who is a trained elementary school teacher, but spends her time these days coaching baton twirling. They share their house with Kora, their young and energetic collie mix.</div></div></div></div></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('blog',["require", "exports", "aurelia-framework", "./models/AppState", "./services/BlogService"], function (require, exports, aurelia_framework_1, AppState_1, BlogService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Blog = (function () {
        function Blog(blogService, appState) {
            this.blogService = blogService;
            this.appState = appState;
        }
        Blog.prototype.selectCategory = function (category) {
            this.selectedTag = '';
            this.selectedCategory = category;
            this.loadPosts();
        };
        Blog.prototype.selectTag = function (tag) {
            this.selectedCategory = 'All';
            this.selectedTag = tag;
            this.loadPosts();
        };
        Blog.prototype.loadPosts = function () {
            var _this = this;
            this.blogService
                .getPosts(this.selectedCategory, this.selectedTag)
                .then(function (posts) { return _this.posts = posts; });
        };
        Blog.prototype.loadCategories = function () {
            var _this = this;
            this.blogService
                .getCategories()
                .then(function (categories) {
                _this.categories = categories;
                _this.categories.unshift('All');
            });
        };
        Blog.prototype.loadTags = function () {
            var _this = this;
            this.blogService
                .getTags()
                .then(function (tags) { return _this.tags = tags; });
        };
        Blog.prototype.activate = function (params) {
            this.loggedIn = this.appState.isLoggedIn();
            this.selectedCategory = this.appState.blogSelectedCategory !== '' ? this.appState.blogSelectedCategory : 'All';
            this.selectedTag = this.appState.blogSelectedTag;
            if (this.appState.blogPosts.length) {
                this.posts = this.appState.blogPosts;
            }
            else {
                this.loadPosts();
            }
            if (this.appState.blogCategories.length) {
                this.categories = this.appState.blogCategories;
            }
            else {
                this.loadCategories();
            }
            if (this.appState.blogTags.length) {
                this.tags = this.appState.blogTags;
            }
            else {
                this.loadTags();
            }
        };
        Blog.prototype.deactivate = function () {
            this.appState.blogPosts = this.posts;
            this.appState.blogCategories = this.categories;
            this.appState.blogSelectedCategory = this.selectedCategory;
            this.appState.blogSelectedTag = this.selectedTag;
        };
        Blog = __decorate([
            aurelia_framework_1.inject(BlogService_1.BlogService, AppState_1.AppState),
            __metadata("design:paramtypes", [BlogService_1.BlogService, AppState_1.AppState])
        ], Blog);
        return Blog;
    }());
    exports.Blog = Blog;
});
;
define('text!blog.html',[],function(){return "<template><require from=\"./resources/value-converters/sort\"></require><require from=\"./resources/elements/blog-post-list-item\"></require><div class=\"container\"><div class=\"row\"><div class=\"col-md-9\"><div class=\"box\"><hr><h2 class=\"intro-text text-center\"><strong>BLOG</strong></h2><hr><div class=\"text-center\" repeat.for=\"post of posts | sort:'postDate'\"><blog-post-list-item post.bind=\"post\" logged-in.bind=\"loggedIn\"></blog-post-list-item></div></div></div><div class=\"col-md-3\"><div class=\"box\"><div if.bind=\"loggedIn\"><a href=\"/#/edit\" class=\"btn btn-default btn-lg\">New Post</a></div><h3 class=\"intro-text text-center\"><strong>CATEGORIES</strong></h3><div repeat.for=\"category of categories\"><a href=\"javascript:;\" click.delegate=\"selectCategory(category)\" class=\"list-group-item ${category === selectedCategory ? 'active' : ''}\"> ${category} </a></div><h3 class=\"intro-text text-center\"><strong>TAGS</strong></h3><div repeat.for=\"tag of tags\"><a href=\"javascript:;\" click.delegate=\"selectTag(tag)\" class=\"list-group-item ${tag === selectedTag ? 'active' : ''}\"> ${tag} </a></div></div></div></div></div></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('blogSinglePost',["require", "exports", "aurelia-framework", "./services/BlogService"], function (require, exports, aurelia_framework_1, BlogService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlogSinglePost = (function () {
        function BlogSinglePost(blogService) {
            this.blogService = blogService;
            this.content = '';
        }
        BlogSinglePost.prototype.activate = function (params) {
            var _this = this;
            var postTitle = params.title;
            this.blogService.getPost(postTitle)
                .then(function (content) {
                _this.content = content;
            });
        };
        BlogSinglePost = __decorate([
            aurelia_framework_1.inject(BlogService_1.BlogService),
            __metadata("design:paramtypes", [BlogService_1.BlogService])
        ], BlogSinglePost);
        return BlogSinglePost;
    }());
    exports.BlogSinglePost = BlogSinglePost;
});
;
define('text!blogSinglePost.html',[],function(){return "<template><div class=\"container\"><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\" innerhtml.bind=\"content\"></div></div></div></div></template>";});;
define('config',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Config = (function () {
        function Config() {
            if (window.location.href.includes("localhost"))
                this.baseUrl = "http://localhost:8000/1.0";
            else
                this.baseUrl = "https://api.thomaskenthurd.com/1.0";
        }
        return Config;
    }());
    exports.Config = Config;
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact',["require", "exports", "aurelia-framework", "./models/ContactItem", "./services/ContactService", "aurelia-validation"], function (require, exports, aurelia_framework_1, ContactItem_1, ContactService_1, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Contact = (function () {
        function Contact(contactService, controllerFactory) {
            this.contactService = contactService;
            this.controllerFactory = controllerFactory;
            this.contact = new ContactItem_1.ContactItem();
            this.error = "";
            this.sent = false;
            this.successMessage = "Your message was successfully sent!";
            this.response = "";
            this.controller = controllerFactory.createForCurrentScope();
            aurelia_validation_1.ValidationRules.ensure(function (c) { return c.name; })
                .required()
                .ensure(function (c) { return c.email; })
                .required()
                .email()
                .ensure(function (c) { return c.message; })
                .required()
                .on(this.contact);
        }
        Contact.prototype.recaptcha = function (response) {
            this.response = response;
        };
        Contact.prototype.onVerified = function () {
            this.response = "verified";
        };
        Contact.prototype.send = function () {
            var _this = this;
            this.error = "";
            this.controller.validate().then(function (result) {
                if (!result.valid) {
                    return;
                }
                _this.contactService.sendMessage(_this.contact).then(function (status) {
                    if (status.success) {
                        _this.sent = true;
                    }
                    else {
                        _this.error = status.error;
                    }
                });
            });
        };
        Contact = __decorate([
            aurelia_framework_1.inject(ContactService_1.ContactService, aurelia_validation_1.ValidationControllerFactory),
            __metadata("design:paramtypes", [ContactService_1.ContactService,
                aurelia_validation_1.ValidationControllerFactory])
        ], Contact);
        return Contact;
    }());
    exports.Contact = Contact;
});
;
define('text!contact.html',[],function(){return "<template><require from=\"./resources/elements/recaptcha\"></require><div class=\"container\"><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><hr><h2 class=\"intro-text text-center\"><strong>CONTACT</strong></h2><hr>Get in touch.<br><br></div></div><div class=\"box\"><div class=\"col-lg-12\"><div if.bind=\"error\" class=\"alert alert-danger\">${error}</div><div if.bind=\"controller.errors.length\" class=\"alert alert-danger\"><ul><li repeat.for=\"error of controller.errors\"> ${error.message} </li></ul></div><div if.bind=\"sent\" class=\"alert alert-success\"> ${successMessage} </div></div><div class=\"col-lg-12\"><div class=\"form-group\"><label for=\"name\">Name</label> <input type=\"text\" class=\"form-control\" id=\"name\" value.bind=\"contact.name & validate\" required></div><div class=\"form-group\"><label for=\"email\">Email</label> <input type=\"email\" class=\"form-control\" id=\"email\" value.bind=\"contact.email & validate\" required></div><div class=\"form-group\"><label for=\"message\">Message</label> <textarea class=\"form-control\" id=\"message\" rows=\"5\" value.bind=\"contact.message & validate\" required></textarea></div><div class=\"form-group\"><recaptcha theme=\"light\" verified.call=\"onVerified()\"></recaptcha><button disabled.bind=\"!response\" if.bind=\"!sent\" click.trigger=\"send()\" class=\"btn btn-default\">Send</button></div></div></div></div></div></template>";});;
define('text!css/business-casual.css',[],function(){return "/*!\n * Start Bootstrap - Business Casual (http://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\n\nbody {\n    font-family: \"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    background: url('../img/bg.jpg') no-repeat center center fixed;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    background-size: cover;\n    -o-background-size: cover;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    text-transform: uppercase;\n    font-family: \"Josefin Slab\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    font-weight: 700;\n    letter-spacing: 1px;\n}\n\np {\n    font-size: 1.25em;\n    line-height: 1.6;\n    color: #000;\n}\n\nhr {\n    max-width: 400px;\n    border-color: #999999;\n}\n\n.brand,\n.address-bar {\n    display: none;\n}\n\n.navbar-brand {\n    text-transform: uppercase;\n    font-weight: 900;\n    letter-spacing: 2px;\n}\n\n.navbar-nav {\n    text-transform: uppercase;\n    font-weight: 400;\n    letter-spacing: 3px;\n}\n\n.img-full {\n    min-width: 100%;\n}\n\n.brand-before,\n.brand-name {\n    text-transform: capitalize;\n}\n\n.brand-before {\n    margin: 15px 0;\n}\n\n.brand-name {\n    margin: 0;\n    font-size: 4em;\n}\n\n.tagline-divider {\n    margin: 15px auto 3px;\n    max-width: 250px;\n    border-color: #999999;\n}\n\n.box {\n    margin-bottom: 20px;\n    padding: 30px 15px;\n    background: #fff;\n    background: rgba(255,255,255,0.9);\n}\n\n.intro-text {\n    text-transform: uppercase;\n    font-size: 1.25em;\n    font-weight: 400;\n    letter-spacing: 1px;\n}\n\n.img-border {\n    float: none;\n    margin: 0 auto 0;\n    border: #999999 solid 1px;\n}\n\n.img-left {\n    float: none;\n    margin: 0 auto 0;\n}\n\nfooter {\n    background: #fff;\n    background: rgba(255,255,255,0.9);\n}\n\nfooter p {\n    margin: 0;\n    padding: 50px 0;\n}\n\n@media screen and (min-width:768px) {\n    .brand {\n        display: inherit;\n        margin: 0;\n        padding: 30px 0 10px;\n        text-align: center;\n        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n        font-family: \"Josefin Slab\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n        font-size: 5em;\n        font-weight: 700;\n        line-height: normal;\n        color: #fff;\n    }\n\n    .top-divider {\n        margin-top: 0;\n    }\n\n    .img-left {\n        float: left;\n        margin-right: 25px;\n    }\n\n    .address-bar {\n        display: inherit;\n        margin: 0;\n        padding: 0 0 40px;\n        text-align: center;\n        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n        text-transform: uppercase;\n        font-size: 1.25em;\n        font-weight: 400;\n        letter-spacing: 3px;\n        color: #fff;\n    }\n\n    .navbar {\n        border-radius: 0;\n    }\n\n    .navbar-header {\n        display: none;\n    }\n\n    .navbar {\n        min-height: 0;\n    }\n\n    .navbar-default {\n        border: none;\n        background: #fff;\n        background: rgba(255,255,255,0.9);\n    }\n\n    .nav>li>a {\n        padding: 35px;\n    }\n\n    .navbar-nav>li>a {\n        line-height: normal;\n    }\n\n    .navbar-nav {\n        display: table;\n        float: none;\n        margin: 0 auto;\n        table-layout: fixed;\n        font-size: 1.25em;\n    }\n}\n\n@media screen and (min-width:1200px) {\n    .box:after {\n        content: '';\n        display: table;\n        clear: both;\n    }\n}";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('editBlogPost',["require", "exports", "aurelia-framework", "./models/AppState", "./services/BlogService", "./models/BlogPost"], function (require, exports, aurelia_framework_1, AppState_1, BlogService_1, BlogPost_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Blog = (function () {
        function Blog(blogService, appState) {
            this.blogService = blogService;
            this.appState = appState;
            this.title = 'New Post';
            this.error = '';
            this.newTag = '';
        }
        Blog.prototype.selectCategory = function (category) {
            this.post.category = category;
        };
        Blog.prototype.addTag = function (tag, isNew) {
            if (isNew === void 0) { isNew = false; }
            if (this.post.tags.find(function (t) { return t === tag; }) !== undefined)
                return;
            this.post.tags.push(tag);
            if (isNew)
                this.newTag = '';
        };
        Blog.prototype.removeTag = function (tag) {
            var tagIndex = this.post.tags.findIndex(function (t) { return t === tag; });
            if (tagIndex === -1)
                return;
            this.post.tags.splice(tagIndex);
        };
        Blog.prototype.save = function () {
            var _this = this;
            this.blogService.savePost(this.post)
                .then(function (status) {
                if (status.success) {
                    _this.saved = true;
                }
                else {
                    _this.error = status.error;
                }
            });
        };
        Blog.prototype.activate = function (params) {
            var _this = this;
            var postTitle = params.title;
            if (postTitle !== undefined) {
                this.title = 'Edit Post';
                this.blogService
                    .getPostForEdit(postTitle)
                    .then(function (post) { return _this.post = post; });
            }
            else {
                this.post = new BlogPost_1.BlogPost();
            }
            this.blogService
                .getCategories()
                .then(function (categories) { return _this.categories = categories; });
            this.blogService
                .getTags()
                .then(function (tags) { return _this.tags = tags; });
        };
        Blog.prototype.deactivate = function () {
            if (!this.saved)
                return;
            this.appState.blogPosts = [];
            this.appState.blogCategories = [];
            this.appState.blogTags = [];
        };
        Blog = __decorate([
            aurelia_framework_1.inject(BlogService_1.BlogService, AppState_1.AppState),
            __metadata("design:paramtypes", [BlogService_1.BlogService, AppState_1.AppState])
        ], Blog);
        return Blog;
    }());
    exports.Blog = Blog;
});
;
define('text!editBlogPost.html',[],function(){return "<template><require from=\"./resources/value-converters/dateformatshort\"></require><div class=\"container\"><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><hr><h2 class=\"intro-text text-center\"><strong>${title}</strong></h2><hr><div class=\"form-group\"><label for=\"title\">Title</label> <input type=\"text\" class=\"form-control\" id=\"title\" value.bind=\"post.name\"></div><div class=\"form-group\"><label for=\"slug\">Slug</label> <input type=\"text\" class=\"form-control\" id=\"slug\" value.bind=\"post.file\"></div><div class=\"form-group\"><label for=\"postDate\">Date</label> <input type=\"text\" class=\"form-control\" id=\"postDate\" value.bind=\"post.postDate | dateFormatShort\"></div><div class=\"form-group\"><label for=\"preview\">Preview</label> <textarea class=\"form-control\" style=\"min-height:150px\" id=\"preview\" value.bind=\"post.preview\"></textarea></div><div class=\"form-group\"><label for=\"content\">Content</label> <textarea class=\"form-control\" style=\"min-height:400px\" id=\"content\" value.bind=\"post.fullContent\"></textarea></div><div class=\"checkbox\"><label><input type=\"checkbox\" checked.bind=\"post.html\"> This content is HTML (uncheck for Markdown)</label></div></div><div class=\"col-lg-6\"><p><strong>Category</strong></p><div class=\"form-group\"><label for=\"category\">Choose an existing one below or enter a new one here.</label> <input type=\"text\" class=\"form-control\" id=\"category\" value.bind=\"post.category\"></div><div repeat.for=\"existingCategory of categories\"><a href=\"javascript:;\" click.delegate=\"selectCategory(existingCategory)\" class=\"list-group-item ${existingCategory === post.category ? 'active' : ''}\"> ${existingCategory} </a></div></div><div class=\"col-lg-6\"><p><strong>Tags</strong><br></p><div class=\"form-group\"><label for=\"newTag\">Choose any existing tag below or enter a new one here.</label> <input type=\"text\" class=\"form-control\" id=\"newTag\" value.bind=\"newTag\"> <button click.trigger=\"addTag(newTag, true)\" class=\"btn btn-default\">Add</button></div><strong>Selected</strong><br><div if.bind=\"!post.tags.length\">No tags selected.</div><div repeat.for=\"tag of post.tags\"><a href=\"javascript:;\" click.delegate=\"removeTag(tag)\" class=\"list-group-item\"> ${tag} </a></div><strong>Existing</strong><br><div repeat.for=\"existingTag of tags\"><a href=\"javascript:;\" click.delegate=\"addTag(existingTag)\" class=\"list-group-item\"> ${existingTag} </a></div></div><div class=\"col-lg-12\"><br><br><button click.trigger=\"save()\" class=\"btn btn-default\">Save</button> <span>${error}</span></div></div></div></div></template>";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('home',["require", "exports", "./models/CarouselItem"], function (require, exports, CarouselItem_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
            this.carouselItems = [
                new CarouselItem_1.CarouselItem("Kent with Bassoon", "img/kent-with-bassoon.jpg"),
                new CarouselItem_1.CarouselItem("Boulder Bassoon Quartet in Japan", "img/qtet-in-japan.jpg"),
                new CarouselItem_1.CarouselItem("BBQ on Denver Billboard", "img/qtet-on-denver-billboard.jpg")
            ];
        }
        return Home;
    }());
    exports.Home = Home;
});
;
define('text!home.html',[],function(){return "<template><require from=\"./resources/elements/carousel\"></require><div class=\"container\"><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12 text-center\"><carousel items.bind=\"carouselItems\"></carousel><h2 class=\"brand-before\"><small>Welcome to the online home of Thomas Kent Hurd</small></h2><hr class=\"tagline-divider\"><h2><small><strong>Bassoonist and Composer</strong></small></h2></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><hr><h2 class=\"intro-text text-center\"><strong>BREAKING NEWS</strong></h2><hr><p><img class=\"img-responsive img-border img-left\" src=\"img/album-cover-off-the-record.jpg\" alt=\"\"></p><hr class=\"visible-xs\"><strong>Boulder Bassoon Quartet Releases their Second Album, \"Off the Record\"</strong><br><br>The second full length album from the group of which I'm a member. The album features some great arrangements of music we've played since the beginning, like soundtracks, the Beatles, and even some 80s pop tunes. To everyone who's asked where the CD is with all of our arrangements, here you go!<br><br>To order a physical CD, <a href=\"https://mkt.com/boulder-bassoon-quartet\" target=\"_blank\">Head over to the quartet's web site to order your copy!</a> The album is also available on any digital download store, such as <a href=\"https://itunes.apple.com/us/album/off-the-record/1430207851\" target=\"_blank\">iTunes</a>, <a href=\"https://www.amazon.com/Off-Record-Boulder-Bassoon-Quartet/dp/B07GL6G6QQ/ref=sr_1_1\" target=\"_blank\">Amazon</a>, <a href=\"https://play.google.com/store/music/album/Boulder_Bassoon_Quartet_Off_the_Record?id=Blkywippnqwx4x2ry57qshpcq4a\" target=\"_blank\">Google Play</a> and more!<p class=\"visible-md visible-sm\"><br><br><br><br></p><p></p></div><div class=\"col-lg-12\"><p>&nbsp;</p><p><img class=\"img-responsive img-border img-left\" src=\"img/bbq-logo-glowing.jpg\" alt=\"\"></p><hr class=\"visible-xs\"><strong>Boulder Bassoon Quartet Turns 10!</strong><br><br>The BBQ reached a major milestone by celebrating their tenth anniversary on March 18, 2017. I've had the pleasure of spending nine of those years with them!<br><br>Find out more about this fantastic group at <a href=\"http://boulderbassoons.com\" target=\"_blank\">their website</a><br><br>Follow them on their <a href=\"https://www.facebook.com/boulderbassoonquartet/\" target=\"_blank\">Facebook page.</a><br><br><br><br><br><br><p class=\"visible-md visible-sm\"><br><br></p><p></p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><hr><h2 class=\"intro-text text-center\"><strong>WHERE TO?</strong></h2><hr><strong><a href=\"#/bio\">Bio</a></strong> Read my bio right here.<br><br><strong><a href=\"#/bassoon\">Bassoon</a></strong> Pages and posts specifically about playing, practicing, writing for, making reeds for, and ranting about the bassoon are all collected here.<br><br><strong><a href=\"#/works\">Works</a></strong> A list of my compositions, with recordings and sheet music links where available.<br><br><strong><a href=\"#/blog\">Blog</a></strong> News on the old bassoon playing and composition front can be found right here, along with the occasional random post, rant, etc.<br><br></div></div></div></div></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('login',["require", "exports", "aurelia-router", "aurelia-framework", "./models/AppState", "./services/UserService"], function (require, exports, aurelia_router_1, aurelia_framework_1, AppState_1, UserService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Login = (function () {
        function Login(userService, router, appState) {
            this.userService = userService;
            this.router = router;
            this.appState = appState;
        }
        Login.prototype.login = function () {
            var _this = this;
            this.userService
                .login(this.userName, this.password)
                .then(function (status) {
                if (status.success) {
                    localStorage.setItem("authToken", status.token);
                    _this.loggedIn = _this.appState.isLoggedIn();
                    _this.userName = '';
                    _this.password = '';
                }
                else {
                    _this.error = status.error;
                }
            });
        };
        Login.prototype.logout = function () {
            localStorage.removeItem("authToken");
            this.loggedIn = this.appState.isLoggedIn();
        };
        Login.prototype.activate = function () {
            this.loggedIn = this.appState.isLoggedIn();
        };
        Login = __decorate([
            aurelia_framework_1.inject(UserService_1.UserService, aurelia_router_1.Router, AppState_1.AppState),
            __metadata("design:paramtypes", [UserService_1.UserService, aurelia_router_1.Router, AppState_1.AppState])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});
;
define('text!login.html',[],function(){return "<template><div class=\"container\"><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\" if.bind=\"!loggedIn\"><hr><h2 class=\"intro-text text-center\"><strong>LOGIN</strong> <span>${message}</span></h2><hr><form><div class=\"form-group\"><label for=\"userName\">User Name</label> <input type=\"text\" class=\"form-control\" id=\"userName\" value.bind=\"userName\"></div><div class=\"form-group\"><label for=\"password\">Password</label> <input type=\"password\" class=\"form-control\" id=\"password\" value.bind=\"password\"></div><button click.trigger=\"login()\" class=\"btn btn-default\">Login</button></form><span>${error}</span></div><div class=\"col-lg-12\" if.bind=\"loggedIn\"><hr><h2 class=\"intro-text text-center\"><strong>LOGOUT</strong></h2><hr><p>You are currently logged in. Click the Logout button to logout.</p><button click.trigger=\"logout()\" class=\"btn btn-default\">Logout</button></div></div></div></div></template>";});;
define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use.standardConfiguration().feature("resources");
        aurelia.use.developmentLogging(environment_1.default.debug ? "debug" : "warn");
        if (environment_1.default.testing) {
            aurelia.use.plugin("aurelia-testing");
        }
        aurelia.use.plugin("aurelia-validation");
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
;
define('models/AppState',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppState = (function () {
        function AppState() {
            this.blogPosts = [];
            this.blogSelectedCategory = '';
            this.blogSelectedTag = '';
            this.blogCategories = [];
            this.blogTags = [];
            this.loggedIn = false;
        }
        AppState.prototype.getBlogPost = function (file) {
            if (!this.blogPosts.length)
                return null;
            var post = this.blogPosts.find(function (post) { return post.file === file; });
            return post;
        };
        AppState.prototype.isLoggedIn = function () {
            return localStorage.getItem("authToken") !== undefined && localStorage.getItem("authToken") !== null;
        };
        return AppState;
    }());
    exports.AppState = AppState;
});
;
define('models/BlogPost',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlogPost = (function () {
        function BlogPost() {
            this.name = '';
            this.file = '';
            this.html = false;
            this.postDate = new Date();
            this.category = '';
            this.tags = [];
            this.preview = '';
            this.fullContent = '';
        }
        return BlogPost;
    }());
    exports.BlogPost = BlogPost;
});
;
define('models/BlogTag',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlogTag = (function () {
        function BlogTag() {
        }
        return BlogTag;
    }());
    exports.BlogTag = BlogTag;
});
;
define('models/CarouselItem',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CarouselItem = (function () {
        function CarouselItem(text, image) {
            this.current = false;
            if (text)
                this.text = text;
            if (image)
                this.image = image;
        }
        return CarouselItem;
    }());
    exports.CarouselItem = CarouselItem;
});
;
define('models/ContactItem',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactItem = (function () {
        function ContactItem() {
            this.name = '';
            this.email = '';
            this.message = '';
        }
        return ContactItem;
    }());
    exports.ContactItem = ContactItem;
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('nav-bar',["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar() {
            this.router = null;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", aurelia_router_1.Router)
        ], NavBar.prototype, "router", void 0);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});
;
define('text!nav-bar.html',[],function(){return "<template><nav class=\"navbar navbar-default\" role=\"navigation\"><div class=\"container\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">${router.title}</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\"><a href.bind=\"row.href\">${row.title}</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=\"loader\" if.bind=\"router.isNavigating\"><i class=\"fa fa-spinner fa-spin fa-2x\"></i></li></ul></div></div></nav></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/blog-post-list-item',["require", "exports", "aurelia-framework", "../../models/BlogPost"], function (require, exports, aurelia_framework_1, BlogPost_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlogPostListItem = (function () {
        function BlogPostListItem() {
        }
        BlogPostListItem.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", BlogPost_1.BlogPost)
        ], BlogPostListItem.prototype, "post", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], BlogPostListItem.prototype, "loggedIn", void 0);
        return BlogPostListItem;
    }());
    exports.BlogPostListItem = BlogPostListItem;
});
;
define('text!resources/elements/blog-post-list-item.html',[],function(){return "<template><require from=\"../value-converters/dateformat\"></require><h2>${post.name} <br><small>${post.postDate | dateFormat}</small></h2><div if.bind=\"post.tags.length\"><span class=\"glyphicon glyphicon-tags\" aria-hidden=\"true\"></span>&nbsp; <span repeat.for=\"tag of post.tags\"> ${tag}&nbsp;&nbsp;</span></div><p>${post.preview}</p><a href=\"#/blog/${post.file}\" class=\"btn btn-default btn-lg\">Read More</a> <a if.bind=\"loggedIn\" href=\"/#/edit/${post.file}\" class=\"btn btn-default btn-lg\">Edit</a><hr></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/carousel',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Carousel = (function () {
        function Carousel() {
            this.time = 5000;
            this.timer = true;
        }
        Carousel.prototype.previous = function (stopTimer) {
            this.navigate(-1, stopTimer);
        };
        Carousel.prototype.next = function (stopTimer) {
            this.navigate(1, stopTimer);
        };
        Carousel.prototype.navigate = function (direction, stopTimer) {
            if (stopTimer === true)
                this.timer = false;
            if (!this.items[this.currentIndex])
                return;
            this.items[this.currentIndex].current = false;
            this.currentIndex += direction;
            if (direction === -1 && this.currentIndex < 0)
                this.currentIndex = this.items.length - 1;
            if (direction === 1 && !this.items[this.currentIndex])
                this.currentIndex = 0;
            this.items[this.currentIndex].current = true;
        };
        Carousel.prototype.itemsChanged = function () {
            this.currentIndex = 0;
            this.navigate(0);
        };
        Carousel.prototype.attached = function () {
            var _this = this;
            this.itemsChanged();
            console.log('setting carousel timer');
            setInterval(function () {
                console.log('timer hit.  timer:' + _this.timer);
                if (_this.timer)
                    _this.next();
            }, this.time);
        };
        Carousel.prototype.valueChanged = function (newValue, oldValue) {
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Array)
        ], Carousel.prototype, "items", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], Carousel.prototype, "time", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], Carousel.prototype, "timer", void 0);
        return Carousel;
    }());
    exports.Carousel = Carousel;
});
;
define('text!resources/elements/carousel.html',[],function(){return "<template><div class=\"carousel slide\"><div class=\"carousel-inner\"><div class.bind=\"item.current ? 'item active' : 'item'\" repeat.for=\"item of items\"><img class=\"img-responsive img-full\" src=\"${item.image}\" alt=\"${item.text}\"></div></div><a class=\"left carousel-control\" click.trigger=\"previous(true)\"><span class=\"icon-prev\"></span> </a><a class=\"right carousel-control\" click.trigger=\"next(true)\"><span class=\"icon-next\"></span></a></div></template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/recaptcha',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var recaptchaCallbackName = "setRecaptchaReady";
    var ready = new Promise(function (resolve) { return (window[recaptchaCallbackName] = resolve); });
    var script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=" + recaptchaCallbackName + "&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    var sitekey = "6Ld0dzQUAAAAAMkQRIg5shdJoqmgyd9Nt4WKK0K8-VCK";
    var Recaptcha = (function () {
        function Recaptcha(element) {
            this.element = element;
            this.theme = "light";
        }
        Recaptcha.prototype.attached = function () {
            var _this = this;
            ready.then(function () {
                return window["grecaptcha"].render(_this.element, {
                    sitekey: sitekey,
                    theme: _this.theme,
                    callback: _this.verified,
                });
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], Recaptcha.prototype, "verified", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], Recaptcha.prototype, "theme", void 0);
        Recaptcha = __decorate([
            aurelia_framework_1.noView(),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], Recaptcha);
        return Recaptcha;
    }());
    exports.Recaptcha = Recaptcha;
});
;
define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});
;
define('resources/value-converters/dateformat',["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
        }
        DateFormatValueConverter.prototype.toView = function (value) {
            return moment(value).format("MMMM Do YYYY");
        };
        return DateFormatValueConverter;
    }());
    exports.DateFormatValueConverter = DateFormatValueConverter;
});
;
define('resources/value-converters/dateformatshort',["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateFormatShortValueConverter = (function () {
        function DateFormatShortValueConverter() {
        }
        DateFormatShortValueConverter.prototype.toView = function (value) {
            return moment(value).format("MM/DD/YYYY");
        };
        DateFormatShortValueConverter.prototype.fromView = function (dateText) {
            return new Date(dateText);
        };
        return DateFormatShortValueConverter;
    }());
    exports.DateFormatShortValueConverter = DateFormatShortValueConverter;
});
;
define('resources/value-converters/sort',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SortValueConverter = (function () {
        function SortValueConverter() {
        }
        SortValueConverter.prototype.toView = function (array, propertyName, direction) {
            if (array === undefined)
                return;
            var factor = direction === 'ascending' ? 1 : -1;
            return array.sort(function (a, b) {
                return (a[propertyName] - b[propertyName]) * factor;
            });
        };
        return SortValueConverter;
    }());
    exports.SortValueConverter = SortValueConverter;
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('services/BlogService',["require", "exports", "aurelia-framework", "aurelia-http-client", "../config", "../models/AppState"], function (require, exports, aurelia_framework_1, aurelia_http_client_1, config_1, AppState_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlogService = (function () {
        function BlogService(httpClient, config, appState) {
            var _this = this;
            this.httpClient = httpClient;
            this.config = config;
            this.appState = appState;
            this.httpClient.configure(function (c) {
                c.withBaseUrl(_this.config.baseUrl);
            });
        }
        BlogService.prototype.getPosts = function (category, tag) {
            if (tag === void 0) { tag = ''; }
            var path = '/posts';
            if (tag !== '')
                path += '/tag/' + tag;
            if (category && category !== 'All')
                path += '/category/' + category;
            console.log("calling posts with path: " + path);
            return this.httpClient.get(path)
                .then(function (data) {
                var posts = JSON.parse(data.response);
                for (var _i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                    var post = posts_1[_i];
                    post.postDate = new Date(post.postDate);
                }
                return posts;
            });
        };
        BlogService.prototype.getPost = function (postTitle) {
            return this.httpClient.createRequest('/post/' + postTitle)
                .asGet()
                .withHeader('Content-Type', 'application/html')
                .send()
                .then(function (data) { return data.response; });
        };
        BlogService.prototype.getPostForEdit = function (postTitle) {
            return this.httpClient.createRequest('/post/' + postTitle + '/edit')
                .asGet()
                .withHeader('Authorization', 'Bearer ' + localStorage.getItem('authToken'))
                .send()
                .then(function (data) { return JSON.parse(data.response); });
        };
        BlogService.prototype.savePost = function (post) {
            return this.httpClient.createRequest('/post')
                .asPost()
                .withHeader('Authorization', 'Bearer ' + localStorage.getItem('authToken'))
                .withContent(post)
                .send()
                .then(function (data) {
                var response = JSON.parse(data.response);
                return response;
            })
                .catch(function (reason) {
                if (reason.statusCode === 401) {
                    return { success: false, error: "Not authorized to make this request" };
                }
                else {
                    return { success: false, error: reason.statusText };
                }
            });
        };
        BlogService.prototype.getCategories = function () {
            return this.httpClient.get('/categories')
                .then(function (data) { return JSON.parse(data.response); });
        };
        BlogService.prototype.getTags = function () {
            return this.httpClient.get('/tags')
                .then(function (data) { return JSON.parse(data.response); });
        };
        BlogService = __decorate([
            aurelia_framework_1.inject(aurelia_http_client_1.HttpClient, config_1.Config),
            __metadata("design:paramtypes", [aurelia_http_client_1.HttpClient, config_1.Config, AppState_1.AppState])
        ], BlogService);
        return BlogService;
    }());
    exports.BlogService = BlogService;
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('services/ContactService',["require", "exports", "aurelia-framework", "aurelia-http-client", "../config", "../models/AppState"], function (require, exports, aurelia_framework_1, aurelia_http_client_1, config_1, AppState_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactService = (function () {
        function ContactService(httpClient, config, appState) {
            var _this = this;
            this.httpClient = httpClient;
            this.config = config;
            this.appState = appState;
            this.httpClient.configure(function (c) {
                c.withBaseUrl(_this.config.baseUrl);
            });
        }
        ContactService.prototype.sendMessage = function (contact) {
            return this.httpClient.createRequest('/contact')
                .asPost()
                .withContent(contact)
                .send()
                .then(function (data) {
                var response = JSON.parse(data.response);
                return response;
            })
                .catch(function (reason) {
                return { success: false, error: reason.statusText };
            });
        };
        ContactService = __decorate([
            aurelia_framework_1.inject(aurelia_http_client_1.HttpClient, config_1.Config),
            __metadata("design:paramtypes", [aurelia_http_client_1.HttpClient, config_1.Config, AppState_1.AppState])
        ], ContactService);
        return ContactService;
    }());
    exports.ContactService = ContactService;
});
;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('services/UserService',["require", "exports", "aurelia-framework", "aurelia-http-client", "../config"], function (require, exports, aurelia_framework_1, aurelia_http_client_1, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserService = (function () {
        function UserService(httpClient, config) {
            var _this = this;
            this.httpClient = httpClient;
            this.config = config;
            this.httpClient.configure(function (c) {
                c.withBaseUrl(_this.config.baseUrl);
            });
        }
        UserService.prototype.login = function (userName, password) {
            return this.httpClient
                .post("/users/login", { userName: userName, password: password })
                .then(function (data) {
                var token = JSON.parse(data.response).token;
                return { success: true, token: token, error: "" };
            })
                .catch(function (reason) {
                if (reason.statusCode === 401) {
                    return {
                        success: false,
                        error: "Incorrect user name or password",
                        token: "",
                    };
                }
                else {
                    return { success: false, error: reason.statusText, token: "" };
                }
            });
        };
        UserService.prototype.logout = function () {
            console.log("nothing here yet");
        };
        UserService = __decorate([
            aurelia_framework_1.inject(aurelia_http_client_1.HttpClient, config_1.Config),
            __metadata("design:paramtypes", [aurelia_http_client_1.HttpClient, config_1.Config])
        ], UserService);
        return UserService;
    }());
    exports.UserService = UserService;
});
;
define('works',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Works = (function () {
        function Works() {
        }
        return Works;
    }());
    exports.Works = Works;
});
;
define('text!works.html',[],function(){return "<template><div class=\"container\"><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><hr><h2 class=\"intro-text text-center\"><strong>WORKS</strong></h2><hr><p>Here are some of the pieces I've written.  Descriptions underneath the audio samples, and links to purchase or download where possible.</p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-6\"><p><iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2048109&amp;color=cc5700&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe></p></div><div class=\"col-lg-6\"><p><iframe width=\"100%\" height=\"450\" scrolling=\"no\" frameborder=\"no\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/277750099&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false\"></iframe></p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><h2 class=\"intro-text\"><strong>Fanfare</strong></h2><p>2018. For three bassoons and contrabassoon<br>This is a high energy fanfare with lots of movement, and a build to a rousing conclusion. I even included the word \"swashbuckling\" as a performance instruction. What could possibly go wrong?<br><br>I've always liked the idea of a bassoon quartet being able to pull off a fanfare type of piece. Hopefully this one demonstrates that. It could be a great opener for a concert or recital.<br><br>Like the majority of my compositions latetly, this was written for my own group, the Boulder Bassoon Quartet.<br><br>The sheet music is not yet published. If your quartet is interested in playing it, let me know on the <a href=\"#/contact\">Contact page</a>.</p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><h2 class=\"intro-text\"><strong>Chorale and Fugue in the Dark</strong></h2><p>2018. For four bassoons<br>The idea for this came from a picture I saw of some old forest at late dusk. Looking at the image, I started thinking about the transition taking place in the picture - an idyllic and relaxing scene where the trees and a breeze blowing through was quickly becoming a scene where those same trees and breeze could take on a more sinister feeling as the darkness of evening descended.<br><br>This picture of emotional ambiguity became the idea and central theme of the piece. Although this is not a programmatic piece, you should hear sounds that echo the idea that something that seemed beautiful and relaxing during the day could become creepy and a little scary at night.<br><br>The fugue is in 4 parts, whose main theme is a callback to some of the \"sound effects\" of the chorale. I like to write contrapuntal music, but rarely apply that to the more formal structure of a fugue. Figuring out and managing the jigsaw puzzle of a fugue was an interesting exercise.<br><br>Written for my own group, the Boulder Bassoon Quartet.<br><br>The sheet music is not yet published. If your quartet is interested in playing it, let me know on the <a href=\"/Contact\">Contact page</a>.</p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><h2 class=\"intro-text\"><strong>Score for short film \"ALT\"</strong></h2><p>2016. For four bassoons<br>Composed with fellow quartet member Brian Jack, this is sure to be the world's first all bassoon film score! A fantastic short film by Boulder film maker Adrian Bishop, this was an exciting project to contribute to. Look for this film at film festivals around the country.<br><br>Part of the process involved multiple iterations of scenes as the movie evolved. This resulted in a lot of music that didn't get into the movie. I may use some of this as source material for music down the road. Listen to the \"Film Score Rejects\" set above.<br><br>More information about the film <a href=\"http://alt-film.com\" target=\"_blank\">here.</a></p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><h2 class=\"intro-text\"><strong>Midnight Shuffle</strong></h2><p>2014. For four bassoons<br>A jazzy piece in the same style as \"That So Suite\", but less difficult and more accessible to play.<br><a href=\"http://www.trevcomusicpublishing.com/index.php?option=com_virtuemart&page=shop.product_details&flypage=flypage.pbv.v1.tpl&product_id=2196&category_id=0\" target=\"_blank\">Sheet music is available from TrevCo Music Publishing.</a></p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><h2 class=\"intro-text\"><strong>Blueish</strong></h2><p>2014. For four bassoons<br>Very simple, contemplative chorale style piece.<br><a href=\"http://www.trevcomusicpublishing.com/index.php?option=com_virtuemart&page=shop.product_details&flypage=flypage.pbv.v1.tpl&product_id=2197&category_id=0\" target=\"_blank\">Sheet music is available from TrevCo Music Publishing.</a></p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><h2 class=\"intro-text\"><strong>That So Suite</strong></h2><p>2012. For four bassoons<br></p><ul><li><em>I. So Cliche</em> - Energetic, rhythmic and aggressive.  Solos in the middle section to introduce each player in the quartet.  Originally completed in late 2010 as its own piece, and premiered at the IDRS conference in 2011.</li><li><em>II. So So</em> - Late night jazz waltz sound. Had a mournful plungered trombone solo in my ear while writing this one.</li><li><em>III. So Much For That</em> - Syncopated and contrapuntal. Mix of bluesy, and even a little funk and gospel sounds. Main theme gradually reveals itself through the chatter of the other parts in the first half. Second half changes moods, and finishes in a rollicking and jubilant coda.</li></ul><p></p><p><a href=\"http://www.trevcomusicpublishing.com/shopping-cart?page=shop.product_details&flypage=flypage.pbv.v1.tpl&product_id=1539&category_id=191\" target=\"_blank\">Sheet music is available from TrevCo Music Publishing.</a><br><a href=\"http://www.trevcomusicpublishing.com/shopping-cart?page=shop.product_details&flypage=flypage.pbv.v1.tpl&product_id=2193&category_id=191\" target=\"_blank\">The second movement is also available as a separate purchase from TrevCo Music Publishing.</a></p></div></div></div><div class=\"row\"><div class=\"box\"><div class=\"col-lg-12\"><h2 class=\"intro-text\"><strong>Quick Evening Ride</strong></h2><p>1997. For piano four hands.<br>Composed way back in 1997, this is a short piece, exploring the idea of how a slow evolution of accompaniment under a theme changes the mood of the piece.  <br>Contact me if you're interested in the sheet music.</p></div></div></div></div></template>";});;
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map