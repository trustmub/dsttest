import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CabinetMemoComponent} from './cabinet-memo.component';
import {InternalCmDetailsComponent} from './internal-memo-list/internal-cm-details/internal-cm-details.component';
import {ExternalCmDetailsComponent} from './external-memo-list/external-cm-details/external-cm-details.component';
import {AuthGuardService} from '../../authentication/auth-guard.service';

const memoRoutes: Routes = [

  {path: 'cabinet-memo', component: CabinetMemoComponent, canActivate: [AuthGuardService]},
  {path: 'cabinet-memo/internal/:id', component: InternalCmDetailsComponent, canActivate: [AuthGuardService]}, // TODO create a detail component for internal cabinet memo
  {path: 'cabinet-memo/external/:id', component: ExternalCmDetailsComponent, canActivate: [AuthGuardService]}, // TODO create a detail component for internal cabinet memo

];

@NgModule({
  imports: [
    RouterModule.forChild(memoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CabinetMemoRoutingModule {

}
