import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-popover',
  templateUrl: './my-popover.component.html',
  styleUrls: ['./my-popover.component.css']
})
export class MyPopoverComponent  {

  constructor() { }

  @Input() links:string[];
  @Input() position:number;

}
