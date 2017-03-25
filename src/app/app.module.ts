import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PopoverModule } from 'ng2-pop-over';
import { AppComponent } from './app.component';
import { MyMessageComponent } from './my-message/my-message.component';
import { MyPopoverComponent } from './my-popover/my-popover.component';


@NgModule({
  declarations: [
    AppComponent,
    MyMessageComponent,
    MyPopoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PopoverModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
