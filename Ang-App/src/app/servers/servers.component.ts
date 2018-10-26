import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	allowNewServer = false;
	serverCreationStatus = 'No server was created!';
	serverName = 'Test Server';
	userName = '';
	serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  showSecret = true;
  logs = [];

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
  		this.serverCreationStatus = 'Server was created!';
      this.servers.push(this.serverName);
  		this.serverCreated = true;
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.logs.push(new Date());
  }

/*  clearUserName() {
  	this.userName = '';
  }*/	
/*  onUpdateServerName(event: Event) {
  	this.serverName = event.target.value;
  }*/

}
