import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {




  @Input() public parentData: any;
  @Output() public childEt = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }



  passToparent(){
    this.childEt.emit("this is chile data")

  }

}
