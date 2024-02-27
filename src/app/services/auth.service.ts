import { Injectable, NgZone } from '@angular/core';
// import { User } from '../services/user';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';

export interface User {
  uid: string;
  email: string;
  name: string;
  avatarUrl: string;
  emailVerified: boolean;
  data: object;
  is: object;
  blocked: boolean;
  generated: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private toastrService: ToastrService
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        console.log(user);

        this.userData = user;
        // localStorage.setItem('waw_user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('waw_user')!);
      } else {
        localStorage.setItem('waw_user', null);
        JSON.parse(localStorage.getItem('waw_user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
        // this.afAuth.authState.subscribe((user) => {
        //   if (user) {
        //     this.router.navigate(['dashboard']);
        //   }
        // });

        return result.user;
      })
      .catch((error) => {
        this.toastrService.error(
          'There is no user. Or This user have may been deleted.'
        );
      });
  }

  // Google
  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        this.SetUserData(result.user);
        return result;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  }

  // Facebook
  signInWithFacebook() {
    const provider = new FacebookAuthProvider();
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        console.log(result);
        this.SetUserData(result.user);
        return result;
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  }

  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
        return result;
      })
      .catch((error) => {
        this.toastrService.error(
          'The email address is already in use by another account.'
        );
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser.then((u: any) => u.sendEmailVerification());
    // .then(() => {
    //   // this.router.navigate(['verify-email-address']);
    // });
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        this.toastrService.success(
          'Password reset email sent, check your inbox.'
        );
      })
      .catch((error) => {
        this.toastrService.error(
          'There is no user. Or This user have may been deleted.'
        );
      });
  }

  //Changepassword
  ChangePassword(newPassword: string) {
    this.afAuth.currentUser.then((user) => {
      user
        .updatePassword(newPassword)
        .then(() => {
          this.toastrService.success('Password updated successfully');
        })
        .catch((error) => {
          this.toastrService.error(
            'There is no user. Or This user have may been deleted.'
          );
        });
    });
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      avatarUrl: user.photoURL,
      emailVerified: user.emailVerified,
      blocked: false,
      generated: false,
      data: {
        application: {
          other_names: [{}],
          typeofaddress_names: [{}],
          country_names: [{}],
          sponsorform_names: [{}],
          children_names: [{}],
          marriages_names: [{}],
          employerone_names: [{}],
          physicaladdressesus_names: [{}],
          employmentfiveyears_names: [{}],
          marriagessponsor_names: [{}],
          sponsorrelative_names: [{}],
          receiveadditionalus_names: [{}],
          additionalhausehold_names: [{}],
          assetbelow_names: [{}],
          liabilitydebt_names: [{}],
          educationalhistorybelow_names: [{}],
          provideinformationabout_names: [{}],
          anyotherlanguage_names: [{}],
          appdateofbirthrepeat_names: [{}],
          sponsoremploymentfiveyears_names: [{}],
          anumber_names: [{}],
          sponsoralienprevious_names: [{}],
          add_names: [],
          addpass_names: [],
          certificates_names: [{}],
          theseorganizations_names: [{}],
        },
        sponsor: {},
        submission: {},
        request: {},
        reason: {},
        docs: {
          marriage: {
            items: {},
          },
          docsus: {
            proofus: {
              items: {},
            },
          },
          docspassport: {
            passportstyle: {
              items: {},
            },
          },
        },
      },
      is: {
        admin: false,
      },
    };

    return userRef.set(userData, {
      merge: true,
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
    });
  }
}
