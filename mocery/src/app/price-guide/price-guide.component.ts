import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-guide',
  templateUrl: './price-guide.component.html',
  styleUrls: ['./price-guide.component.scss']
})
export class PriceGuideComponent implements OnInit {
    private elements: string[];
    private chosenElement: string;

  constructor() { 
      this.chosenElement = "";
      this.elements = [];
  }

  ngOnInit() {
  }

  search() {
      this.elements.push(this.chosenElement);
      this.chosenElement = "";
  }
}
