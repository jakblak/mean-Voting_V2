import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { ListPostsComponent } from './list-posts.component';
import { AddPostComponent } from './add-post.component';
import { PostsContainerComponent } from './posts-container.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ListPostsComponent,
    AddPostComponent,
    PostsContainerComponent
  ],
  exports: [
    ListPostsComponent,
    AddPostComponent,
    PostsContainerComponent
  ],
  providers: [ ]
})
export class PostsModule {}