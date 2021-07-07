import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  private _url: string = environment.apiUrl;

  currentUser: User = {};

  currentUserSubject: Subject<User> = new Subject<User>();

  constructor(
    private _client: HttpClient,
    private _router: Router
  ) { }

  decodeToken(token: string): number {
    let decodedToken: any = jwt_decode(token);
    return Number.parseInt(decodedToken['UserId']);
  }

  get(id: number): Observable<User> {
    return this._client.get<User>(this._url + '/users/' + id);
  }

  emitUser() {
    if (this.currentUser.id == null && localStorage.getItem('token')) {
      this.get(this.decodeToken(localStorage.getItem('token')!)).subscribe(
        (data: User) => {
          this.currentUser = data;
          this.currentUserSubject.next(this.currentUser);
        }
      )
    }
    else {
      this.currentUserSubject.next(this.currentUser)
    }
  }

  signIn(email: string, password: string): void {
    let loginInfo: any = { email: email, password: password };
    this._client.post<User>(this._url + '/auth/login', loginInfo).subscribe(
      (data: User) => {
        this.currentUser = data;
        localStorage.setItem('token', data.token ?? '');
        this.emitUser();
        //this._toast.success('Vous êtes bien connecté', '', { position: NbGlobalLogicalPosition.BOTTOM_END })
        this._router.navigate(['/home']);
      }
    )
  }

  signOut(): void {
    this.currentUser = {};
    localStorage.clear();
    this.emitUser();
    this._router.navigate(['/home']);
  }
}
