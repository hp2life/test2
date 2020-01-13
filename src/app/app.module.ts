import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilePipe } from './file.pipe';
import { MyErrorDirective } from './my-error.directive';


@NgModule({
  declarations: [
    AppComponent,
    FilePipe,
    MyErrorDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
