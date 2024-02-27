import { Component } from '@angular/core';
import { HttpService, UiService } from 'wacom';
import { ModalService } from 'wacom';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  section = 1;
  authGoogle() {
    let user = {
      email: this.us.data.application.register_name,
      password: this.us.data.application.password_name,
      data: this.us.data,
    };
    this.auth
      .signInWithGoogle()
      .then((result) => {
        if (result && result.user) {
          this.us.uid = result.user.uid;
          user.email = result.user.email;
          if (!this.us.data.cardholder) {
            this.us.loadData(
              result.user.uid,
              (response) => {
                localStorage.setItem(
                  'waw_user',
                  JSON.stringify({
                    ...result.user,
                    name: response?.name,
                    is: response?.is,
                    data: response?.data,
                  })
                );
                this.router.navigate(['/']);
              }
              //  {...this.us, ...user, }
            );
          } else {
            this.http.post(
              '/api/user/signup',
              {
                userId: result.user.uid,
                data: user.data,
                name: this.us.name,
                avatarUrl: this.us.avatarUrl,
                is: { admin: false },
                email: user.email,
              },
              (resp) => {
                this.us.loadData(result.user.uid, (resp) => {
                  localStorage.setItem(
                    'waw_user',
                    JSON.stringify({
                      ...result.user,
                      name: resp.name,
                      is: resp.is,
                      data: resp.data,
                    })
                  );
                  this.router.navigate(['/']);
                });
              }
            );
          }
        }
      })
      .catch((e) => console.log(e));
  }

  authFacebook() {
    let user = {
      email: this.us.data.application.register_name,
      password: this.us.data.application.password_name,
      data: this.us.data,
    };
    this.auth
      .signInWithFacebook()
      .then((result) => {
        if (result && result.user) {
          this.us.uid = result.user.uid;
          user.email = result.user.email;
          if (!this.us.data.cardholder) {
            this.us.loadData(result.user.uid, (response) => {
              localStorage.setItem(
                'waw_user',
                JSON.stringify({
                  ...result.user,
                  name: response?.name,
                  is: response?.is,
                  data: response?.data,
                })
              );
              this.router.navigate(['/']);
            });
          } else {
            this.http.post(
              '/api/user/data',
              {
                userId: result.user.uid,
                data: user.data,
                name: this.us.name,
                avatarUrl: this.us.avatarUrl,
                is: { admin: false },
                email: user.email,
              },
              (resp) => {
                this.us.loadData(result.user.uid, (resp) => {
                  localStorage.setItem(
                    'waw_user',
                    JSON.stringify({
                      ...result.user,
                      name: resp.name,
                      is: resp.is,
                      data: resp.data,
                    })
                  );
                  this.router.navigate(['/']);
                });
              }
            );
          }
        }
      })
      .catch((e) => console.log(e));
  }
  submit() {
    let user = {
      email: this.us.data.application.register_name,
      password: this.us.data.application.password_name,
      data: this.us.data,
    };
    // this.http.post('/api/user/status', user, (resp:any) => {
    if (user.email && user.password && this.us.isSignIn) {
      this.auth
        .SignIn(user.email, user.password)
        .then((u) => {
          if (u) {
            this.us.uid = u.uid;
            this.us.loadData(u.uid, (response) => {
              localStorage.setItem(
                'waw_user',
                JSON.stringify({
                  ...u,
                  name: response.name,
                  is: response.is,
                  data: response.data,
                })
              );
              this.router.navigate(['/homepage']);
            });
          }
          // this.us.load();
        })
        .catch((e) => { });
    } else {
      if (this.us.data.cardholder) {
        // this.http.post('/api/user/signup', user, (resp:any) => {
        // 	localStorage.setItem('waw_user', JSON.stringify(resp));
        // 	this.us.load();
        // 	this.router.navigate(['/'])
        // });
        this.auth.SignUp(user.email, user.password).then((r) => {
          console.log("api/////", r)
          if (r) {
            console.log("api/////", r, {
              userId: r.user.uid,
              data: user.data,
              name: this.us.name,
              avatarUrl: this.us.avatarUrl,
              is: { admin: false },
              email: user.email,
            })
            this.http.post(
              '/api/user/signup',
              {
                userId: r.user.uid,
                data: user.data,
                name: this.us.name,
                avatarUrl: this.us.avatarUrl,
                is: { admin: false },
                email: user.email,
              },
              (resp) => {
                console.log("api---->", resp)
                this.us.loadData(r.user.uid, (resp) => {
                  localStorage.setItem(
                    'waw_user',
                    JSON.stringify({
                      ...r.user,
                      name: resp.name,
                      is: resp.is,
                      data: resp.data,
                    })
                  );
                  this.router.navigate(['/']);
                });
              }
            );
          }
          // this.us.load();
        });
      } else {
        this.us.auth = '';
      }
    }
    // })
  }

  constructor(
    public us: UserService,
    private http: HttpService,
    private router: Router,
    public modal: ModalService,
    public ui: UiService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) { }
}
