import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  currentRate = 0;
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
  }

  ngOnInit(): void {
  }

}
