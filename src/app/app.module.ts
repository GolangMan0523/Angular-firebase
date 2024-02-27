import { pdfMake } from 'pdfmake/build/pdfmake';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Authenticated, Admins } from 'src/app/services/guard';
// Common
import { AppComponent } from './app.component';
import { GuestComponent } from './common/guest/guest.component';
import { UserComponent } from './common/user/user.component';
import { CommonModule } from './common/common.module';
// Flatpickr
import 'flatpickr/dist/flatpickr.css';
import { FormsModule } from '@angular/forms';
// import { TableModule } from 'ngx-bootstrap/table';
// Flatpickr 2
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
// config
import { WacomModule, MetaGuard, Config } from 'wacom';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Document, Packer, Paragraph } from 'docx';
import { StripeModule } from './modules/stripe/stripe.module';
import { StripemodalComponent } from './modals/stripemodal/stripemodal.component';
import { ConfettyComponent } from './modals/confetty/confetty.component';
import { FargotpasswordComponent } from './modals/fargotpassword/fargotpassword.component';
import { AddComponent } from './modals/add/add.component';
import { AddphotoComponent } from './modals/addphoto/addphoto.component';
import { DoneComponent } from './modals/done/done.component';
import { AlienComponent } from './modals/alien/alien.component';
import { UscisComponent } from './modals/uscis/uscis.component';
import { JvisaComponent } from './modals/jvisa/jvisa.component';
import { KeyComponent } from './modals/key/key.component';
import { UscissComponent } from './modals/usciss/usciss.component';
import { MailingaddressComponent } from './modals/mailingaddress/mailingaddress.component';
import { ImpairmentsComponent } from './modals/impairments/impairments.component';
import { CalculateComponent } from './modals/calculate/calculate.component';
import { AnnualComponent } from './modals/annual/annual.component';
import { HouseholdComponent } from './modals/household/household.component';
import { LiabilitiesComponent } from './modals/liabilities/liabilities.component';
import { SkillsComponent } from './modals/skills/skills.component';
import { BenefitsComponent } from './modals/benefits/benefits.component';
import { InstitutionalizationComponent } from './modals/institutionalization/institutionalization.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { PdfComponentComponent } from './common/pdf-component/pdf-component.component';
import { environment } from '../environments/environment';
import { id } from 'date-fns/locale';
import { DatePipe } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';

const config: Config = {
  socket: false,
  modal: {
    modals: {
      /* modals */ institutionalization: InstitutionalizationComponent,
      benefits: BenefitsComponent,
      skills: SkillsComponent,
      liabilities: LiabilitiesComponent,
      household: HouseholdComponent,
      annual: AnnualComponent,
      calculate: CalculateComponent,
      impairments: ImpairmentsComponent,
      mailingaddress: MailingaddressComponent,
      usciss: UscissComponent,
      key: KeyComponent,
      jvisa: JvisaComponent,
      uscis: UscisComponent,
      alien: AlienComponent,
      done: DoneComponent,
      addphoto: AddphotoComponent,
      add: AddComponent,
      fargotpassword: FargotpasswordComponent,
      confetty: ConfettyComponent,
      stripemodal: StripemodalComponent,
    },
  },
  meta: {
    useTitleSuffix: true,
    defaults: {
      title: 'Greenboard',
      titleSuffix: ' | Green Card',
      'og:image': 'https://webart.work/api/user/cdn/waw-logo.png',
    },
  },
};
/*
 *	Routing Management
 */

const routes: Routes = [
  {
    path: '',
    canActivate: [Authenticated],
    component: UserComponent,
    children: [
      /* user */ {
        path: 'payment',
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'Payment',
          },
        },
        loadChildren: () =>
          import('./pages/user/homepage/payment/payment.module').then(
            (m) => m.PaymentModule
          ),
      },
      {
        path: '',
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'HomePage',
          },
        },
        loadChildren: () =>
          import('./pages/user/homepage/homepage.module').then(
            (m) => m.HomepageModule
          ),
      },
      {
        path: 'profile',
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'My Profile',
          },
        },
        loadChildren: () =>
          import('./pages/user/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'payment',
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'Payment Page',
          },
        },
        loadChildren: () =>
          import('./pages/user/homepage/payment/payment.module').then(
            (m) => m.PaymentModule
          ),
      },
    ],
  },
  {
    path: '',
    canActivate: [Admins],
    component: GuestComponent,
    children: [
      {
        path: 'print/:_id',
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'Print',
          },
        },
        loadChildren: () =>
          import('./pages/guest/print/print.module').then((m) => m.PrintModule),
      },
    ],
  },
  {
    path: '',
    canActivate: [Admins],
    component: UserComponent,
    children: [
      /* admin */ {
        path: 'users',
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'Users',
          },
        },
        loadChildren: () =>
          import('./pages/admin/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
  {
    path: 'pdf-com/:id',
    component: PdfComponentComponent,
  },

  {
    path: 'auth',
    component: GuestComponent,
    children: [
      /* guest */ {
        path: '',
        canActivate: [MetaGuard],
        data: {
          meta: {
            title: 'Auth',
          },
        },
        loadChildren: () =>
          import('./pages/guest/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
/* Bootstrap */

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    UserComponent,
    StripemodalComponent,
    ConfettyComponent,
    FargotpasswordComponent,
    AddComponent,
    AddphotoComponent,
    DoneComponent,
    AlienComponent,
    UscisComponent,
    JvisaComponent,
    KeyComponent,
    UscissComponent,
    MailingaddressComponent,
    ImpairmentsComponent,
    CalculateComponent,
    AnnualComponent,
    HouseholdComponent,
    LiabilitiesComponent,
    SkillsComponent,
    BenefitsComponent,
    InstitutionalizationComponent,
    PdfComponentComponent,
  ],
  imports: [
    FormsModule,
    StripeModule,
    CommonModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    Ng2FlatpickrModule,
    WacomModule.forRoot(config),

    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
    ToastrModule.forRoot({
      timeOut: 15000, // 15 seconds
      closeButton: true,
      progressBar: true,
    }),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [Authenticated, Admins, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
