import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Artist } from '../../models/artist.model';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  private _url: string = environment.apiUrl;
  artists: Artist[] = [];

  constructor(
    private _artistService: ArtistService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._artistService.getAll().subscribe((data: Artist[]) => {
      this.artists = data;
      for (let artist of this.artists) {
        artist.picture = this._url + '/' + artist.picture;
      }
    });
  }

  addArtist(): void {
    this._router.navigate(['/artist/add']);
  }
}