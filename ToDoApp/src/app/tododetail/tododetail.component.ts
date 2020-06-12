import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {

  constructor() { }

  @Input('parentdata') public tododetail;


  ngOnInit(): void {
  }

}
