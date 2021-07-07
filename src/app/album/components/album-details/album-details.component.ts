import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  private _url: string = environment.apiUrl;
  currentAlbum: Album = {};

  constructor(
    private _albumService: AlbumService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id'];
    this._albumService.get(id).subscribe((data: Album) => {
      this.currentAlbum = data;
      this.currentAlbum.cover = this._url + '/' + this.currentAlbum.cover;
    });
  }
}