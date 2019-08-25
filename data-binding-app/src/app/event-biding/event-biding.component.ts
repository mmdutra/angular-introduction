import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-biding',
  templateUrl: './event-biding.component.html',
  styleUrls: ['./event-biding.component.css']
})
export class EventBidingComponent implements OnInit {

  buttonName = 'My button';
  i = 0;
  spiner_mode = "determinate";
  btnEnable = false;
  selectDisabled = false;
  selectedOption = 1;
  inputName = 'John';

  save(){
    console.log("clicked");
  }

  inc(){
    this.i ++;
    this.buttonName = 'Clicks: ' + this.i;
  }

  disable(){
    this.btnEnable = true;
    this.inc();
  }

  cbChange(event){
    this.selectDisabled = event.checked;
  }

  selectionChange(event){
    this.selectedOption = event.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
