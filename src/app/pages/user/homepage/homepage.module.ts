import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './application/home/home.component';
import { HomeComponent as SponsorHome } from './sponsor/home/home.component';
import { PersonalComponent } from './application/personal/personal.component';
import { ImmigrationComponent } from './application/immigration/immigration.component';
import { PaymentComponent } from './payment/payment.component';
import { FamilyComponent } from './application/family/family.component';
import { PlaceslivedComponent } from './application/placeslived/placeslived.component';
import { SummaryComponent } from './application/summary/summary.component';
import { EmploymentComponent } from './application/employment/employment.component';
import { FinancicalComponent } from './sponsor/financical/financical.component';
import { EnotificationComponent } from './sponsor/enotification/enotification.component';
import { SubmissionhomeComponent } from './submissionone/submissionhome/submissionhome.component';
import { SubmissiontwohomeComponent } from './submissiontwo/submissiontwohome/submissiontwohome.component';
import { NextstepshomeComponent } from './nextsteps/nextstepshome/nextstepshome.component';
import { CollectdocumentsComponent } from './submissionone/collectdocuments/collectdocuments.component';
import { CollectdocumentComponent } from './submissiontwo/collectdocument/collectdocument.component';
import { PrintformsComponent } from './submissionone/printforms/printforms.component';
import { SubmitapplicationComponent } from './submissionone/submitapplication/submitapplication.component';
import { SubmitappComponent } from './submissiontwo/submitapp/submitapp.component';
import { WhatsnextComponent } from './submissionone/whatsnext/whatsnext.component';
import { Printi864Component } from './submissiontwo/printi864/printi864.component';
import { TimelineComponent } from './nextsteps/timeline/timeline.component';
import { TrackapplicationComponent } from './nextsteps/trackapplication/trackapplication.component';
import { GreencardComponent } from './nextsteps/greencard/greencard.component';
import { UnitedstatesComponent } from './nextsteps/unitedstates/unitedstates.component';
import { AfterreceivingComponent } from './nextsteps/afterreceiving/afterreceiving.component';
import { DoneComponent } from './nextsteps/done/done.component';
import { PersonalinfoComponent } from './sponsor/personalinfo/personalinfo.component';
import { SponsorfamilyComponent } from './sponsor/sponsorfamily/sponsorfamily.component';
import { SponsorplaceslivedComponent } from './sponsor/sponsorplaceslived/sponsorplaceslived.component';
import { SponsorimmigrationComponent } from './sponsor/sponsorimmigration/sponsorimmigration.component';
import { SponsoremploumentComponent } from './sponsor/sponsoremploument/sponsoremploument.component';
import { SponsorsummaryComponent } from './sponsor/sponsorsummary/sponsorsummary.component';
import { ReviewandprintComponent } from './printform/reviewandprint/reviewandprint.component';
import { SigndateetsComponent } from './printform/signdateets/signdateets.component';
import { FinalcheckComponent } from './printform/finalcheck/finalcheck.component';
import { UscisfilingComponent } from './submit/uscisfiling/uscisfiling.component';
import { OrganizeappComponent } from './submit/organizeapp/organizeapp.component';
import { MailComponent } from './submit/mail/mail.component';
import { NextstepsComponent } from './submit/nextsteps/nextsteps.component';
import { MarriagedocumentsComponent } from './collectdocuments/marriagedocuments/marriagedocuments.component';
import { ProfofusComponent } from './collectdocuments/profofus/profofus.component';
import { PassportComponent } from './collectdocuments/passport/passport.component';
import { IdentificationComponent } from './collectdocuments/identification/identification.component';
import { ProofofbonaComponent } from './collectdocuments/proofofbona/proofofbona.component';
import { ProofoimmigrationComponent } from './collectdocuments/proofoimmigration/proofoimmigration.component';
import { ProofofinancialComponent } from './collectdocuments/proofofinancial/proofofinancial.component';
import { ProofoselfComponent } from './collectdocuments/proofoself/proofoself.component';
import { MedicalComponent } from './collectdocuments/medical/medical.component';
import { BirthcertificateComponent } from './collectdocuments/birthcertificate/birthcertificate.component';
import { SelfinfoComponent } from './application/selfinfo/selfinfo.component';
import { OtherhistoryComponent } from './application/otherhistory/otherhistory.component';
import { AuthorizationsComponent } from './application/authorizations/authorizations.component';
import { AppenotificationComponent } from './application/appenotification/appenotification.component';
import { HomeComponent as SubmithomeComponent } from './submit/home/home.component';
import { HomeprintComponent } from './printform/homeprint/homeprint.component';
import { HomecollectComponent } from './collectdocuments/homecollect/homecollect.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// Flatpickr
import 'flatpickr/dist/flatpickr.css';
import { FormsModule } from '@angular/forms';

// Flatpickr 2
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { StripeModule } from 'src/app/modules/stripe/stripe.module';
import { PublicComponent } from './application/public/public.component';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
];
@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes),
    Ng2FlatpickrModule,
    BsDatepickerModule,
    StripeModule,
    CommonModule,
    ToastrModule,
  ],
  declarations: [
    HomepageComponent,
    SponsorHome,
    HomeComponent,
    PersonalComponent,
    ImmigrationComponent,
    FamilyComponent,
    PlaceslivedComponent,
    SummaryComponent,
    EmploymentComponent,
    FinancicalComponent,
    EnotificationComponent,
    SubmissionhomeComponent,
    SubmissiontwohomeComponent,
    NextstepshomeComponent,
    CollectdocumentsComponent,
    CollectdocumentComponent,
    PrintformsComponent,
    SubmitapplicationComponent,
    SubmitappComponent,
    WhatsnextComponent,
    Printi864Component,
    PaymentComponent,
    TimelineComponent,
    TrackapplicationComponent,
    GreencardComponent,
    UnitedstatesComponent,
    AfterreceivingComponent,
    DoneComponent,
    PersonalinfoComponent,
    SponsorfamilyComponent,
    SponsorplaceslivedComponent,
    SponsorimmigrationComponent,
    SponsoremploumentComponent,
    SponsorsummaryComponent,
    ReviewandprintComponent,
    SigndateetsComponent,
    FinalcheckComponent,
    UscisfilingComponent,
    OrganizeappComponent,
    MailComponent,
    NextstepsComponent,
    MarriagedocumentsComponent,
    ProfofusComponent,
    PassportComponent,
    IdentificationComponent,
    ProofofbonaComponent,
    ProofoimmigrationComponent,
    ProofofinancialComponent,
    ProofoselfComponent,
    MedicalComponent,
    BirthcertificateComponent,
    SelfinfoComponent,
    OtherhistoryComponent,
    AuthorizationsComponent,
    AppenotificationComponent,
    SubmithomeComponent,
    HomeprintComponent,
    HomecollectComponent,
    PublicComponent,
  ],
  providers: [],
})
export class HomepageModule {}
