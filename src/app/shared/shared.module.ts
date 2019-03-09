import {NgModule} from '@angular/core';
import {AddRecipientFormComponent} from './add-recipient-form/add-recipient-form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AddRecipientFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddRecipientFormComponent
  ]
})
export class SharedModule {
}
