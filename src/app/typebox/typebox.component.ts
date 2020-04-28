import { Component, OnInit, OnChanges,DoCheck } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-typebox',
  templateUrl: './typebox.component.html',
  styleUrls: ['./typebox.component.css']
})
export class TypeboxComponent implements OnInit {

  randomText = '';
  success = false;
  enteredText = '';
  timer = 0
  exit_flag = true
  score = 0
  constructor() { }

  ngOnInit(): void {

  }


  onTimer(){
    let tim = setInterval(()=>{
      if(this.timer > 0 && this.success === false && this.exit_flag === false){
      this.timer--;
      }else{
        // console.log(this.exit_flag)
          if(!this.exit_flag){
            console.log(this.exit_flag)
            clearInterval(tim);
            this.success = false
            this.enteredText = '';   
            this.onStartClick();     
        }else{
        clearInterval(tim);     
      }
    }
    },1000)
  }

  onStartClick(){
    this.randomText = lorem.words();
    this.timer = 15;
    this.exit_flag = false
    this.onTimer();
  }

  onStopClick(){
    this.exit_flag = true;
  }

  onReset(){
    this.score = 0;
    this.timer = 0;
    this.exit_flag = true;
    this.enteredText = '';
    this.randomText = '';
  }
  
  onInput(value: string){
    this.enteredText = value;

    if(this.enteredText === this.randomText){
      this.success = true
      this.score++;
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
