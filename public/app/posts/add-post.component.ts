import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mv-add-post',
  templateUrl: 'add-post.component.html',
  styleUrls: ['styles.css']
})

export class AddPostComponent {

  post = {
    link: '',
    desc: '',
    title: ''
  }

}