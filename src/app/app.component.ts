import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chronometre';
  
  public time : Number;  
  public arrayTime : Array<Number> = [];
  
  public startChrono() : Number {
    return this.time = Date.now();
  }

  public timeElapsed(){
    if ( (typeof this.time) === Number)
    return Date.now() - this.time;
  }
}

