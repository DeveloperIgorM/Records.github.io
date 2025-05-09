

import { Component, OnInit, NgModule } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {

  faTimes = faTimes;

  constructor(public messagesService: MessagesService) {}
  
  ngOnInit(): void {}

}
