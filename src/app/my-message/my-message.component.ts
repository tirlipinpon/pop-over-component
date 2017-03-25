import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.css']
})
export class MyMessageComponent implements OnInit {

  constructor() { }
  @Input() content:string;
  @Input() title:string;
  @Input() links:string[];

  ngOnInit() {
    console.log('links: '+JSON.stringify(this.links) );
  }

}
