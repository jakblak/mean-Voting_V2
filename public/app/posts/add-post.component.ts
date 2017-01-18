import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mv-add-post',
  templateUrl: 'add-post.template.html',
  styleUrls: ['styles.css']
})

export class AddPostComponent {

  fullForm: boolean = false;

  post = {
    link: '',
    desc: '',
    title: ''
  }

  toggle(value: boolean) {
    this.fullForm = value;
  }

}