import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist } from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private _url: string = environment.apiUrl;

  constructor(
    private _client: HttpClient,
    private _router: Router
  ) { }

  getAll(): Observable<Artist[]> {
    return this._client.get<Artist[]>(this._url + '/artists');
  }

  get(id: number): Observable<Artist> {
    return this._client.get<Artist>(this._url + '/artists/' + id);
  }

  add(artist: Artist) {
    this._client.post<any>(this._url + '/artists', artist).subscribe(
      () => {
        this._router.navigate(['/home'])
      });
  }
}