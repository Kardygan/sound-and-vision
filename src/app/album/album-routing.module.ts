import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import { AlbumListComponent } from './components/album-list/album-list.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: AlbumListComponent },
      // { path: 'new', resolve: { personList: PersonResolver }, component: AddmovieComponent },
      { path: ':id', component: AlbumDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
