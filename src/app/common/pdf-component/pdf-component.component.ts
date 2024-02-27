import { Component, OnInit, NgModule } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pdf-custom-component',
  templateUrl: './pdf-component.component.html',
  styleUrls: ['./pdf-component.component.scss']
})

export class PdfComponentComponent implements OnInit {

  id:string = "";

	constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.id =  this.route.snapshot.paramMap.get('id')
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
  }

}
