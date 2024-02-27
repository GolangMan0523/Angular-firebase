import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MongoService } from 'wacom';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AuthService } from './auth.service';
import firebase from 'firebase/compat';
import { error } from 'console';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private mongo: MongoService,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {
    console.log('loaded');
    const user = localStorage.getItem('waw_user');
    if (user) {
      const uid = JSON.parse(user)?._delegate?.uid || JSON.parse(user)?.uid;
      this.uid = uid;
      this.loadData(uid);
    }
  }
  /*
   *	Declarations
   */
  uid: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
  public counter = 2;
  public resultValues = [];
  public result;
  public auth = '';
  public isSignIn = false;
  public tab = 'application';
  public section = 'home';
  public pagesection: number = 1;
  public users: any = [];
  public _users: any = {};
  public is: any = {};
  public data: any = {
    docspassport: { passportstyle: {} },
    docsus: { proofus: {} },
    docs: { marriage: {} },
    application: {
      other_names: [],
    },
    sponsor: {},
    submission: {},
  };
  public avatarUrl: any;
  public name: any;
  public email: any;
  /* PDF MANAGEMENT */
  private pdfMake: any;
  async loadPdfMaker() {
    if (!this.pdfMake) {
      const pdfMakeModule = await import('pdfmake/build/pdfmake');
      const pdfFontsModule = await import('pdfmake/build/vfs_fonts');
      this.pdfMake = pdfMakeModule.default;
      this.pdfMake.vfs = pdfFontsModule.default.pdfMake.vfs;
    }
  }
  public roles = ['admin'];
  async generatePdf() {
    await this.loadPdfMaker();
    const def = {
      content: [
        {
          style: 'tableExample',
          table: {
            body: [
              ['Column 1', 'Column 2', 'Column 3'],
              ['One value goes here', 'Another one here', 'OK?'],
            ],
          },
        },
      ],
    };
    this.pdfMake.createPdf(def).open();
  }

  updateps(section: number) {
    this.pagesection = section;
  }

  loadData(uid: string, callback?: any, user?: any) {
    return this.http
      .get(`/api/user/login?userId=${uid}`)
      .subscribe((response: any) => {
        console.log(response, 'response loadData');
        if (response) {
          const data = this.prepareData(response.data);
          this.calcSponsors();
          this.is = response.is || {};
          this.data = data;
          response.data = data;
          if (this.is.admin) {
            this.loadUsersData();
          }
          callback && callback(response);
        }
        // if(response == null) {
        //   this.http.post(
        //     '/api/user/data',
        //     {
        //       userId: uid,
        //       data: user.data,
        //       name: user.name,
        //       avatarUrl: user.avatarUrl,
        //       is: user.is,
        //       email: user.email,
        //     }
        //   ).subscribe((resp) => {
        //     this.loadData(uid, (response) => callback && callback(response));
        //   });
        // }
      });
  }

  loadUsersData() {
    this.http.get(`/api/user/users`).subscribe((response: any) => {
      if (response) {
        const users = response.usersData.map((userData) =>
          this.prepareData(userData)
        );
        this.users = users;
        const prepUsers = {};
        users.map((user) => {
          prepUsers[user._id] = user;
          return user;
        });
        this._users = prepUsers;
      }
    });
  }

  prepareData(data) {
    if (typeof data != 'object') data = {};
    if (typeof data.application != 'object') data.application = {};
    if (!Array.isArray(data.application.other_names))
      data.application.other_names = [];
    if (!data.application.other_names.length) {
      data.application.other_names.push({});
    }
    if (!Array.isArray(data.application.typeofaddress_names))
      data.application.typeofaddress_names = [];
    if (!data.application.typeofaddress_names.length) {
      data.application.typeofaddress_names.push({});
    }
    if (!Array.isArray(data.application.country_names))
      data.application.country_names = [];
    if (!data.application.country_names.length) {
      data.application.country_names.push({});
    }
    if (!Array.isArray(data.application.sponsorform_names))
      data.application.sponsorform_names = [];
    if (!data.application.sponsorform_names.length) {
      data.application.sponsorform_names.push({});
    }
    if (!Array.isArray(data.application.children_names))
      data.application.children_names = [];
    if (!data.application.children_names.length) {
      data.application.children_names.push({});
    }
    if (!Array.isArray(data.application.marriages_names))
      data.application.marriages_names = [];
    if (!data.application.marriages_names.length) {
      data.application.marriages_names.push({});
    }
    if (!Array.isArray(data.application.employerone_names))
      data.application.employerone_names = [];
    if (!data.application.employerone_names.length) {
      data.application.employerone_names.push({});
    }
    if (!Array.isArray(data.application.physicaladdressesus_names))
      data.application.physicaladdressesus_names = [];
    if (!data.application.physicaladdressesus_names.length) {
      data.application.physicaladdressesus_names.push({});
    }
    if (!Array.isArray(data.application.employmentfiveyears_names))
      data.application.employmentfiveyears_names = [];
    if (!data.application.employmentfiveyears_names.length) {
      data.application.employmentfiveyears_names.push({});
    }
    if (!Array.isArray(data.application.marriagessponsor_names))
      data.application.marriagessponsor_names = [];
    if (!data.application.marriagessponsor_names.length) {
      data.application.marriagessponsor_names.push({});
    }
    if (!Array.isArray(data.application.sponsorrelative_names))
      data.application.sponsorrelative_names = [];
    if (!data.application.sponsorrelative_names.length) {
      data.application.sponsorrelative_names.push({});
    }
    if (!Array.isArray(data.application.receiveadditionalus_names))
      data.application.receiveadditionalus_names = [];
    if (!data.application.receiveadditionalus_names.length) {
      data.application.receiveadditionalus_names.push({});
    }
    if (!Array.isArray(data.application.additionalhausehold_names))
      data.application.additionalhausehold_names = [];
    if (!data.application.additionalhausehold_names.length) {
      data.application.additionalhausehold_names.push({});
    }
    if (!Array.isArray(data.application.assetbelow_names))
      data.application.assetbelow_names = [];
    if (!data.application.assetbelow_names.length) {
      data.application.assetbelow_names.push({});
    }
    if (!Array.isArray(data.application.liabilitydebt_names))
      data.application.liabilitydebt_names = [];
    if (!data.application.liabilitydebt_names.length) {
      data.application.liabilitydebt_names.push({});
    }
    if (!Array.isArray(data.application.educationalhistorybelow_names))
      data.application.educationalhistorybelow_names = [];
    if (!data.application.educationalhistorybelow_names.length) {
      data.application.educationalhistorybelow_names.push({});
    }
    if (!Array.isArray(data.application.provideinformationabout_names))
      data.application.provideinformationabout_names = [];
    if (!data.application.provideinformationabout_names.length) {
      data.application.provideinformationabout_names.push({});
    }
    if (!Array.isArray(data.application.anyotherlanguage_names))
      data.application.anyotherlanguage_names = [];
    if (!data.application.anyotherlanguage_names.length) {
      data.application.anyotherlanguage_names.push({});
    }
    if (!Array.isArray(data.application.anyotherlanguage_names))
      data.application.anyotherlanguage_names = [];
    if (!data.application.anyotherlanguage_names.length) {
      data.application.anyotherlanguage_names.push({});
    }
    if (!Array.isArray(data.application.appdateofbirthrepeat_names))
      data.application.appdateofbirthrepeat_names = [];
    if (!data.application.appdateofbirthrepeat_names.length) {
      data.application.appdateofbirthrepeat_names.push({});
    }
    if (!Array.isArray(data.application.sponsoremploymentfiveyears_names))
      data.application.sponsoremploymentfiveyears_names = [];
    if (!data.application.sponsoremploymentfiveyears_names.length) {
      data.application.sponsoremploymentfiveyears_names.push({});
    }
    if (!Array.isArray(data.application.anumber_names))
      data.application.anumber_names = [];
    if (!data.application.anumber_names.length) {
      data.application.anumber_names.push({});
    }
    if (!Array.isArray(data.application.sponsoralienprevious_names))
      data.application.sponsoralienprevious_names = [];
    if (!data.application.sponsoralienprevious_names.length) {
      data.application.sponsoralienprevious_names.push({});
    }
    if (!Array.isArray(data.application.typeofaddress_names))
      data.application.typeofaddress_names = [];
    if (!data.application.typeofaddress_names.length) {
      data.application.typeofaddress_names.push({});
    }
    if (!Array.isArray(data.application.add_names))
      data.application.add_names = [];

    if (!Array.isArray(data.application.addpass_names))
      data.application.addpass_names = [];
    if (!Array.isArray(data.application.certificates_names))
      data.application.certificates_names = [];
    if (!data.application.certificates_names.length) {
      data.application.certificates_names.push({});
    }
    if (!Array.isArray(data.application.theseorganizations_names))
      data.application.theseorganizations_names = [];
    if (!data.application.theseorganizations_names.length) {
      data.application.theseorganizations_names.push({});
    }
    if (!data.application.anumber_names.length) {
      data.application.anumber_names.push({});
    }
    if (typeof data.sponsor != 'object') data.sponsor = {};
    if (typeof data.submission != 'object') data.submission = {};
    if (typeof data.request != 'object') data.request = {};
    if (typeof data.reason != 'object') data.reason = {};
    if (typeof data.docs != 'object') data.docs = {};
    if (typeof data.docs.marriage != 'object') data.docs.marriage = {};
    if (typeof data.docs.marriage.items != 'object')
      data.docs.marriage.items = {};

    if (typeof data.docsus != 'object') data.docsus = {};
    if (typeof data.docsus.proofus != 'object') data.docsus.proofus = {};
    if (typeof data.docsus.proofus.items != 'object')
      data.docsus.proofus.items = {};
    if (typeof data.docspassport != 'object') data.docspassport = {};
    if (typeof data.docspassport.passportstyle != 'object')
      data.docspassport.passportstyle = {};
    if (typeof data.docspassport.passportstyle.items != 'object')
      data.docspassport.passportstyle.items = {};

    return data;
  }

  /*
   *	User Management
   */
  update() {
    if (this.data.cardholder == null) {
    }

    this.updateData();

    // this.mongo.afterWhile(this, () => {
    //   // this.mongo.update('user', this, {
    //   //   fields: 'name data',
    //   // });
    // });
  }

  updateData() {
    if (this.uid) {
      this.http
        .patch(`/api/user/data`, {
          userId: this.uid,
          data: this.data,
        })
        .subscribe((resp) => {
          console.log(resp);
        });
    }
  }

  change_password(oldPass, newPass) {
    this.http
      .post('/api/user/changePassword', {
        newPass: newPass,
        oldPass: oldPass,
      })
      .subscribe((resp) => {
        if (resp) alert('successfully changed password');
        else alert('failed to change password');
      });
  }

  top() {
    window.scrollTo(0, 0);
  }

  /*
   *	Admin Management
   */

  create(user) {
    // this.mongo.create('user', user);
    console.log(user);
    this.authService.SignUp(user.email, user.password);
  }
  save(user) {
    // console.log(user._id);
    const id = user._id;
    this.http.put(`api/user/data/${id}`, user).subscribe((resp: any) => {
      console.log(resp);
      if (resp.is.admin == true) {
        // this.showToast()
        window.alert('Admin permission have been set.');
        // this.snackBar.open('Message sent', 'Dismiss', {
        //   duration: 3000
        // });
      } else {
        window.alert('Admin permission have been revoked.');
      }
    });
  }

  delete(id) {
    this.http.delete(`/api/user/delete/${id}`).subscribe((resp: any) => {
      if (resp) {
        window.alert('This account is deleted');
        this.users.forEach((user, index) => {
          if (user._id == id) {
            console.log(user.id);
            this.users.splice(index, 1);
          }
        });
        console.log(this.users);
      }
    });
  }
  /*
   *	End of
   */
  todataUrl(fl, cb) {
    var a = new FileReader();
    a.onload = (e) => {
      var target: any = e.target;
      cb(target.result);
    };
    a.readAsDataURL(fl);
  }
  changeAvatar(e) {
    // this.todataUrl(e.target.files[0], (dataUrl) => {
    //   this.avatarUrl = dataUrl;
    //   this.http
    //     .post('/api/user/avatar', {
    //       dataUrl: dataUrl,
    //     })
    //     .subscribe((resp: any) => {
    //       this.avatarUrl = resp;
    //     });
    // });
    this.todataUrl(e.target.files[0], (dataUrl) => {
      this.avatarUrl = dataUrl;
      this.http
        .patch('/api/data/avatar', {
          userId: this.uid,
          dataUrl: dataUrl,
        })
        .subscribe((resp: any) => {
          this.avatarUrl = resp;
        });
    });
  }
  sendForm(id) {
    this.http.post('/api/user/sendForm', { id: id }).subscribe((resp) => {});
  }
  calcSponsors() {
    this.data.application.howmanyus_name > 0 &&
      this.resultValues.push(parseInt(this.data.application.howmanyus_name));
    this.data.application.howmanyustaxreturn_name > 0 &&
      this.resultValues.push(
        parseInt(this.data.application.howmanyustaxreturn_name)
      );
    this.data.application.howmanyuspermanentresidents_name > 0 &&
      this.resultValues.push(
        parseInt(this.data.application.howmanyuspermanentresidents_name)
      );
    this.result =
      this.resultValues
        .map((value) => value * 5675)
        .reduce((a, b) => a + b, 0) + 21775;

    this.counter +=
      parseInt(
        this.data.application.howmanyus_name
          ? this.data.application.howmanyus_name
          : 0
      ) +
      parseInt(
        this.data.application.howmanyustaxreturn_name
          ? this.data.application.howmanyustaxreturn_name
          : 0
      ) +
      parseInt(
        this.data.application.howmanyuspermanentresidents_name
          ? this.data.application.howmanyuspermanentresidents_name
          : 0
      );
  }
}
