import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'stripemodal',
  templateUrl: './stripemodal.component.html',
  styleUrls: ['./stripemodal.component.scss'],
})
export class StripemodalComponent {
  constructor(private router: Router) {}

  paid() {
    this.router.navigate(['/payment']);
  }
}
