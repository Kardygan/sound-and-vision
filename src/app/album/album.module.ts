import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { SharedModule } from '../shared/shared.module';
import { AlbumListComponent } from './components/album-list/album-list.component';


@NgModule({
  declarations: [
    AlbumDetailsComponent,
    AlbumListComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule
  ]
})
export class AlbumModule { }
