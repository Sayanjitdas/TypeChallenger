import { Component, OnInit, OnChanges,DoCheck } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typebox',
  templateUrl: './typebox.component.html',
  styleUrls: ['./typebox.component.css']
})
export class TypeboxComponent implements OnInit {

  randomText = lorem.words();
  success = false;
  enteredText = '';
  timer = 20
  constructor() { }

  ngOnInit(): void {

    this.onTimer()
  }

  onTimer(){
    let tim = setInterval(()=>{
      if(this.timer > 0 && this.success === false){
      console.log(this.timer)
      this.timer--;
      }else{
        clearInterval(tim);
        this.success = false
        this.randomText = lorem.words();
        this.enteredText = '';
        this.timer = 20;   
        this.onTimer();     
      }
    },1000)
  }

  
  onInput(value: string){
    this.enteredText = value;

    if(this.enteredText === this.randomText){
      this.success = true
    }
  }

  compare(letter: string, randText: string){
    if(!randText){
      return 'pending'
    }

    if (letter === randText){
      return 'green'
    }

    if (letter !== randText){
      return 'red'
    }

  }
}
