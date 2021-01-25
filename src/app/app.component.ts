import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chronometre';
  
  public time : number = 0;  
  public chronoOn : boolean = false;
  public chrono ;

  public arrayTime : Array<number> = [];
  
  public startChrono() : number {
    this.chronoOn = true;
    this.chrono = setInterval(()=>{
      this.time += 1;
      }, 1000);
    return this.time;
    // return this.time = Date.now();
  }

  public timeElapsed(){
    if ( (typeof this.time) == "number" && this.time != 0)
    return Date.now() - this.time;
  }

  public stopChrono() {
    clearInterval(this.chrono);
  }

  
  
}


