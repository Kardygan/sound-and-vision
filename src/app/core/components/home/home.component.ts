import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album/models/album.model';
import { AlbumService } from 'src/app/album/services/album.service';
import { Artist } from 'src/app/artist/models/artist.model';
import { ArtistService } from 'src/app/artist/services/artist.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _url: string = environment.apiUrl;
  albums: Album[] = [];
  artists: Artist[] = [];

  constructor(
    private _albumService: AlbumService,
    private _artistService: ArtistService
  ) { }

  ngOnInit(): void {
    this._albumService.getAll().subscribe((data: Album[]) => {
      this.albums = data;
      for (let album of this.albums) {
        album.cover = this._url + '/' + album.cover;
      }
    });
    this._artistService.getAll().subscribe((data: Artist[]) => {
      this.artists = data;
      for (let artist of this.artists) {
        artist.picture = this._url + '/' + artist.picture;
      }
    });
  }

}