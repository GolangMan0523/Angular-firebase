import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HashService, ModalService } from 'wacom';
import { create } from 'canvas-confetti';
@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  constructor(
    public us: UserService,
    hash: HashService) {
      this.showConfetti();
  }

  showConfetti() {
    var myCanvas = document.createElement('canvas');
    myCanvas.style.position = 'absolute'
    myCanvas.style.top = '0'
    myCanvas.style.bottom = '0'
    myCanvas.style.right = '0'
    myCanvas.style.left = '0'
    myCanvas.width = window.innerWidth
    myCanvas.height = window.innerHeight
    document.body.appendChild(myCanvas);
    console.log(myCanvas);

    var myConfetti = create(myCanvas, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 500,
      spread: 700,

      // any other options from the global
      // confetti function
    });
  }

}
