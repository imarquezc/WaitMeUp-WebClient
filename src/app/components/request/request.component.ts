import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Input() request;

  constructor() { }

  ngOnInit() {
  }

}
