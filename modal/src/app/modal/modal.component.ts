import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input()
  public text = '';
  public showWindow = false;

  clickedButton() {
    if (this.showWindow === false)
      this.showWindow = true;
      
    else
      this.showWindow = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
