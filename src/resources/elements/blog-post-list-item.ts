import {bindable} from 'aurelia-framework';
import {BlogPost} from '../../models/BlogPost';

export class BlogPostListItem {

  @bindable post: BlogPost
  @bindable loggedIn: boolean

  valueChanged(newValue, oldValue) {

  }
}

