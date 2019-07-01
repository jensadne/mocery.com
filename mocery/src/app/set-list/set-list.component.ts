import { Component, OnInit } from '@angular/core';

import { BrixdbService } from '../brixdb.service';
import { Set } from '../models/set';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {
    private sets: Set[];

  constructor(
      private service: BrixdbService
  ) { }

  ngOnInit() {
  }

}
