import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})

export class KegListComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  constructor() { }

  ngOnInit() {
  }

}
