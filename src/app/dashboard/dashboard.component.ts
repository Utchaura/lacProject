import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stateName: any;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
  //  this.route.params.subscribe(params => {
  //   console.log(params)
  //     this.stateName = params
  //   })
  }

}
