import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'wacom';
@Component({
  selector: 'stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss'],
})
export class StripeComponent {
  @Input() amount: number;
  @Input() type = 'charge';
  @Output() paid = new EventEmitter();
  public invalidError = false;
  public cardDetailsFilledOut = false;
  public cardCaptureReady = 1;
  sourceChange(source: stripe.Source) {
    if (this.type === 'charge') {
      this.http.post(
        '/api/stripe/charge',
        {
          amount: this.amount,
          source,
        },
        (resp) => {
          if (resp) {
            this.paid.emit();
          }
        }
      );
    }
  }

  close() {}

  constructor(private http: HttpService) {}
}
