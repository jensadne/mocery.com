import { Component, OnInit } from '@angular/core';

import { BrixdbService } from '../brixdb.service';
import { Colour } from '../models/colour';

@Component({
  selector: 'app-colour-list',
  templateUrl: './colour-list.component.html',
  styleUrls: ['./colour-list.component.scss']
})
export class ColourListComponent implements OnInit {
    private colours: Colour[];

  constructor(
      private service: BrixdbService
  ) { }

  ngOnInit() {
    this.service.getColourList().subscribe(res => this.colours = res);
  }
}
