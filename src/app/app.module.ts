import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { fromEventPattern } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';




@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
