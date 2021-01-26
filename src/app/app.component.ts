import { Component } from '@angular/core';
import { ChronoItem } from './chrono';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stopwatch';

  public timeNow : number |null =null;  
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
    this.timeNow = Date.now();
    this.chronoOn = true; 
    this.actualiseChrono();   
    return this.time;
  }
  
  public actualiseChrono() : void {    
    this.chrono = setInterval(()=>{
      this.time = Date.now() - this.timeNow;      
      this.miliSeconds = Math.floor((this.time) % 1000);      
      this.seconds = Math.floor((this.time / 1000) % 60);
      this.minutes = Math.floor((this.time / 60 / 1000) % 60);
      }, 10);
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

  public restartChrono(){
    this.isPaused = false; 
    this.timeNow = Date.now() -this.time;
    this.actualiseChrono(); 
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
    this.pauseChrono();    
    this.time = 0;
    this.miliSeconds = 0;
    this.seconds = 0;
    this.minutes = 0;   
    this.arrayTime = [] ;
    this.isPaused = false;
  }

  public clearTimeHold(index : number) : void {
    if (index >=0 && index < this.arrayTime.length){
      this.arrayTime.splice(index,1);
    }    
  }

  public addNoteTime($event : KeyboardEvent, object :ChronoItem): void {
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


