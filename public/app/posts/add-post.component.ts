import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mv-add-post',
  templateUrl: 'add-post.component.html'
})

export class AddPostComponent {

  post = {
    link: '',
    desc: '',
    title: ''
  }

}