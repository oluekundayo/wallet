import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  spinner = false;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(){
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    this.valueChange.emit(true);
    }, 500);
  }

}
