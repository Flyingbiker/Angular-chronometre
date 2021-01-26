import { Component } from '@angular/core';
import { ChronoItem } from './chrono';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stopwatch';
  
  public time : number = 0;  
  public miliSeconds : number = 0;  
  public seconds : number = 0;  
  public minutes : number = 0;  
  public chronoOn : boolean = false;
  public isPaused : boolean = false;
  public chrono : number|null = null ;
  public index : number = 0;

  public arrayTime : Array<ChronoItem> = [];
  
  public startChrono() : number {
    this.chronoOn = true; 
    this.isPaused = false;      
    this.chrono = setInterval(()=>{
      this.time += 1;
      this.miliSeconds = this.time % 100;
      this.seconds = Math.floor((this.time / 100) % 60);
      this.minutes = Math.floor((this.time / 60 / 100) % 60);
      }, 10);
    return this.time;
  }

  public timeElapsed() : number {
    if ( (typeof this.time) == "number" && this.time != 0)
    return Date.now() - this.time;
  }

  public pauseChrono() {    
    this.isPaused = true;
    if (this.chrono !== null){
      clearInterval(this.chrono);
    }
  }

  public holdTime() : Array<object> {
    this.arrayTime.push({      
      "minutes" : this.minutes,
      "seconds" : this.seconds,
      "miliSeconds" : this.miliSeconds,
      "note" : ''
    })
    this.index ++;  
    console.log( this.arrayTime );
    
    return this.arrayTime;
  }

  public clearChrono(){
    this.chronoOn = false;
    this.time = 0;
    this.miliSeconds = 0;
    this.seconds = 0;
    this.minutes = 0;    
  }

  public clearTimeHold(index : number) : Array<object> {
    this.arrayTime.splice(index,1);
    return this.arrayTime;
  }

  public addNoteTime($event : KeyboardEvent, object :ChronoItem): void {
    if ($event.code === 'Enter'){
      const $input : EventTarget | null = $event.target;
      if ( $input instanceof HTMLInputElement) {
        console.log($input.value);
        const stringInput = $input.value.trim();
        if (stringInput !== ''){
          object.note = stringInput;
        }
      }
    }
  }

}


