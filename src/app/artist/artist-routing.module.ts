import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistAddComponent } from './components/artist-add/artist-add.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: ArtistListComponent },
      { path: 'add', component: ArtistAddComponent },
      { path: ':id', component: ArtistDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
