import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  private _url: string = environment.apiUrl;
  albums: Album[] = [];

  constructor(
    private _albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this._albumService.getAll().subscribe((data: Album[]) => {
      this.albums = data;
      for (let album of this.albums) {
        album.cover = this._url + '/' + album.cover;
      }
    });
  }
}