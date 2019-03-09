import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CabinetMemoComponent} from './cabinet-memo.component';
import {InternalMemoListComponent} from './internal-memo-list/internal-memo-list.component';
import {ExternalMemoListComponent} from './external-memo-list/external-memo-list.component';
import {InternalCmDetailsComponent} from './internal-memo-list/internal-cm-details/internal-cm-details.component';
import {InternalCmFormComponent} from './internal-memo-list/internal-cm-form/internal-cm-form.component';
import {EditIcmFormComponent} from './internal-memo-list/internal-cm-details/edit-icm-form/edit-icm-form.component';
import {ExternalCmDetailsComponent} from './external-memo-list/external-cm-details/external-cm-details.component';
import {ExternalCmFormComponent} from './external-memo-list/external-cm-form/external-cm-form.component';
import {EditEcmFormComponent} from './external-memo-list/external-cm-details/edit-ecm-form/edit-ecm-form.component';
import {CabinetMemoRoutingModule} from './cabinet-memo-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    CabinetMemoComponent,
    InternalMemoListComponent,
    InternalCmDetailsComponent,
    EditIcmFormComponent,
    InternalCmFormComponent,
    ExternalMemoListComponent,
    ExternalCmDetailsComponent,
    EditEcmFormComponent,
    ExternalCmFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CabinetMemoRoutingModule,
    SharedModule,
  ]
})
export class CabinetMemoModule {
}
