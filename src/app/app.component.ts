import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stopwatch';
  
  public time : number = 0;  
  public seconds : number = 0;  
  public minutes : number = 0;  
  public hours : number = 0;  
  public chronoOn : boolean = false;
  public isPaused : boolean = false;
  public chrono : number ;

  public arrayTime : Array<object> = [];
  
  public startChrono() : number {
    this.chronoOn = true; 
    this.isPaused = false;   
    this.chrono = setInterval(()=>{
      this.time += 1;
      this.seconds = this.time % 60;
      this.minutes = Math.floor((this.time / 60) % 60);
      this.hours = Math.floor(this.time / 60 / 60);
      }, 1000);
    return this.time;
  }

  public timeElapsed() : number {
    if ( (typeof this.time) == "number" && this.time != 0)
    return Date.now() - this.time;
  }

  public pauseChrono() {    
    this.isPaused = true;
    clearInterval(this.chrono);
  }

  public holdTime() : Array<object> {
    this.arrayTime.push({
      "hours": this.hours, 
      "minutes" : this.minutes,
      "seconds" : this.seconds
    })
    console.log( this.arrayTime );
    
    return this.arrayTime;
  }

}


