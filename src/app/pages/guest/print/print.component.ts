import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services';
import { Document, Packer } from 'docx'
import { saveAs } from 'file-saver'
import { CalcService } from 'src/app/services';


@Component({
	selector: 'print',
	templateUrl: './print.component.html',
	styleUrls: ['./print.component.scss']
})
export class PrintComponent {
  @ViewChild('form') wrap: ElementRef;
  private interval: any = null;
  public resultValues = [];
  public result;
  public counter = 2;


	public _id = this.router.url.replace('/print/', '');

	constructor(public us: UserService, private router: Router) {

	}

  ngAfterViewInit(){
    this.interval = setInterval(()=> {
      if(this.us._users[this._id])
        this.generateDoc()
    }, 1000);
  }

  generateDoc() {
    const sourceHTML = `<html xmlns:o='urn:schemas-microsoft-com:office:office'
    xmlns:w='urn:schemas-microsoft-com:office:word'
    xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
      </head>
      <body>
      <style>
      .form {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 50px 0 0 0;
      }
      .form-inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 50px 0 50px;
      }
      .print__wrapper {
        display: flex;
        flex-direction: column;
        span {
          padding: 25px 0 0 0;
          font-weight: 600;
        }
      }
        .print__title {
          color: #ed9121;
        }
      </style>
      ${this.wrap?.nativeElement?.innerHTML}
      </body>
    </html>
    `

    var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
    var fileDownload = document.createElement("a");
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = `${this._id}.doc`;
    fileDownload.click();
    document.body.removeChild(fileDownload);
    clearInterval(this.interval);

    // setTimeout(()=> {
    //   window.close();
    // },1000)
  }
}
