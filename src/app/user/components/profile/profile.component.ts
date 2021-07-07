import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { UserAuthenticationService } from '../../services/user-authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private _url: string = environment.apiUrl;
  currentUser: User = {};

  constructor(
    private _userAuthenticationService: UserAuthenticationService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.params['id'];
    this._userAuthenticationService.get(id).subscribe((data: User) => {
      this.currentUser = data;
      this.currentUser.picture = this._url + '/' + this.currentUser.picture;
    });
  }

}
