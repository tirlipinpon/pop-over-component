import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.css']
})
export class MyMessageComponent  {

  constructor() { }
  @Input() content:string;
  @Input() title:string;
  @Input() links:string[];



}
