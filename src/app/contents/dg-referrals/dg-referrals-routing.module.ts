import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DgReferralsComponent} from './dg-referrals.component';
import {DgReferralsDetailsComponent} from './dg-referrals-details/dg-referrals-details.component';

const DgReferralRoutes: Routes = [

  {path: 'dg-referrals', component: DgReferralsComponent},
  {path: 'dg-referrals/:id', component: DgReferralsDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(DgReferralRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class DgReferralsRoutingModule {
}
