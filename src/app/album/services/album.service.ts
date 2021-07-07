import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private _url: string = environment.apiUrl;

  constructor(
    private _client: HttpClient,
    private _router: Router
  ) { }

  getAll(): Observable<Album[]> {
    return this._client.get<Album[]>(this._url + '/albums');
  }

  get(id: number): Observable<Album> {
    return this._client.get<Album>(this._url + '/albums/' + id);
  }

  // create(m: MovieToApi) {
  //   this._client.post<any>(this.url + '/movie', m).subscribe(
  //     (idMovie: any) => {
  //       let actorList = m.actors ?? []

  //       for (let i = 0; i < actorList.length; i++) {
  //         if (m.actors) m.actors[i].movieId = idMovie
  //         this._client.post(this.url + '/person/setActor', m.actors ? m.actors[i] : null).subscribe(() => { })
  //       }
  //       this._router.navigate(['/home'])
  //     }
  //   )
  // }
}
