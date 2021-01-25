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
  public chronoOn : boolean = false;
  public isPaused : boolean = false;
  public chrono : number ;

  public arrayTime : Array<number> = [];
  
  public startChrono() : number {
    this.chronoOn = true; 
    this.isPaused = false;   
    this.chrono = setInterval(()=>{
      this.time += 1;
      if (this.time % 100){
        this.seconds += 1;
      }
      if (this.seconds % 60){
        this.minutes += 1;
      }
      }, 1000);
    return this.time;
  }

  public timeElapsed(){
    if ( (typeof this.time) == "number" && this.time != 0)
    return Date.now() - this.time;
  }

  public pauseChrono() {    
    this.isPaused = true;
    clearInterval(this.chrono);
  }

}


