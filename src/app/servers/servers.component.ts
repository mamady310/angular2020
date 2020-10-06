import { Component, OnInit } from '@angular/core';

@Component({
//  selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "no server was created"
  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    },4000);
   }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }
}
