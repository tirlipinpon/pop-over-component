import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-my-popover',
  templateUrl: './my-popover.component.html',
  styleUrls: ['./my-popover.component.css']
})
export class MyPopoverComponent implements OnInit {

  constructor() { }

  @Input() links:string[];
  @Input() position:number;

  ngOnInit() {
  }

}
