import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Artist } from '../../models/artist.model';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  private _url: string = environment.apiUrl;
  currentArtist: Artist = {};

  constructor(
    private _artistService: ArtistService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id'];
    this._artistService.get(id).subscribe((data: Artist) => {
      this.currentArtist = data;
      this.currentArtist.picture = this._url + '/' + this.currentArtist.picture;
    });
  }

}
