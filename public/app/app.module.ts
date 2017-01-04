import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PostsModule } from './posts/posts.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nav.component';

@NgModule({
  imports:      [ BrowserModule,
                       FormsModule,
                       PostsModule ],
  declarations: [ AppComponent,
                          NavbarComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }