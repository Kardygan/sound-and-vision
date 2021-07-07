import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbActionsModule, NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule, NbLayoutModule, NbSearchModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbLayoutModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbContextMenuModule
  ]
})
export class SharedModule { }
