import { Component, OnInit, Input } from '@angular/core';

import { BrixdbService } from '../brixdb.service';
import { BricklinkPrice } from '../models/bricklink-price'; 
import { BricksnPiecesPrice } from '../models/bricksnpieces-price';

@Component({
  selector: 'price-guide-comparator',
  templateUrl: './price-guide-comparator.component.html',
  styleUrls: ['./price-guide-comparator.component.scss']
})
export class PriceGuideComparatorComponent implements OnInit {
    @Input() private elementId: string;
    private bricklinkPrice: any;
    private bricksnpiecesPrice: any
    private message: string;

  constructor(
      private service: BrixdbService
  ) { }

  ngOnInit() {
    console.log(this.elementId);
    this.service.getBricksnPiecesPrice(this.elementId).subscribe(res => {console.log(res); this.bricksnpiecesPrice = res});
    this.service.getBricklinkPrice(this.elementId).subscribe(res => {console.log(res); this.bricklinkPrice = res});
  }

}
