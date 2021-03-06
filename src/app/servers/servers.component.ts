import { Component, OnInit } from '@angular/core';

@Component({
//  selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created";
  serverCreated = false; 
  serverName = "TestServer";
  constructor() {
      
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }


  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! The name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  };
}
