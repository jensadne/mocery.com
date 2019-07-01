import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { BrixdbService } from '../brixdb.service';
import { Set } from '../models/set';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.scss']
})
export class SetDetailComponent implements OnInit {
    private set: Set;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private service: BrixdbService
  ) { }

  ngOnInit() {
 	 const num = this.route.snapshot.paramMap.get('number');
      //this.set = 
		//this.route.paramMap.
        //switchMap((params: ParamMap) => {
        //    console.log(params);
            this.service.getSet(num
								).subscribe(res => this.set = res);
//			})
 //       ;
  }
}
