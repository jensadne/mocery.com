import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { BrixdbService } from '../brixdb.service';
import { Element } from '../models/element';
import { Part } from '../models/part';
import { OwnedColour } from '../models/owned-colour';
import { PartDetailData } from './part-detail';

@Component({
  selector: 'app-part-detail',
  templateUrl: './part-detail.component.html',
  styleUrls: ['./part-detail.component.scss']
})
export class PartDetailComponent implements OnInit {
    private part: PartDetailData;
    private ownedColours: OwnedColour[]; 
    private elements: Element[]; 

  constructor(  
      private route: ActivatedRoute,
      private router: Router,
      private service: BrixdbService
  ) { }

  ngOnInit() {
 	 const number_ = this.route.snapshot.paramMap.get('number');
     console.log(number_);
    this.service.getPart(number_).subscribe(res => { 
        console.log(res);
        this.part = res;
        this.elements = res.elements;
        this.ownedColours = res.ownedColours;
    });
  }

}
