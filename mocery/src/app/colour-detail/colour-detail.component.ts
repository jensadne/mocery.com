import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BrixdbService } from '../brixdb.service';
import { Colour } from '../models/colour';

@Component({
  selector: 'app-colour-detail',
  templateUrl: './colour-detail.component.html',
  styleUrls: ['./colour-detail.component.scss']
})
export class ColourDetailComponent implements OnInit {
    private colour: Colour;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: BrixdbService
  ) { }

  ngOnInit() {
 	 const slug = this.route.snapshot.paramMap.get('slug');
    this.service.getColour(slug).subscribe(res => this.colour = res);
  }
}
