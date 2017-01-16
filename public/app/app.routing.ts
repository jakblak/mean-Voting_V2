import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: AppComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules }) // ,  {enableTracing: true} )
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }