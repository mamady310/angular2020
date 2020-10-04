import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { fromEventPattern } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
