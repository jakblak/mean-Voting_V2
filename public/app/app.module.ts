import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpModule, RequestOptions } from '@angular/http';
import { HomeComponent } from './home/home.component';
/* Feature Modules */
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nav.component';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   HttpModule,
                   PostsModule,
                   AuthModule,
                   AppRoutingModule
                   ],
  declarations: [ NavbarComponent,
                          AppComponent,
                          HomeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }