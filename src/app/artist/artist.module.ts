import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { SharedModule } from '../shared/shared.module';
import { ArtistAddComponent } from './components/artist-add/artist-add.component';


@NgModule({
  declarations: [
    ArtistDetailsComponent,
    ArtistListComponent,
    ArtistAddComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    SharedModule
  ]
})
export class ArtistModule { }
