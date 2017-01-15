import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

import { AuthService } from './auth/auth.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nav.component';

@NgModule({
  imports:      [ BrowserModule,
                       FormsModule,
                       PostsModule,
                       AuthModule ],
  declarations: [ AppComponent,
                          NavbarComponent ],
  providers: [
    AuthService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }