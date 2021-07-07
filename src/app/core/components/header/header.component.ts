import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService, NbMenuBag, NbMenuService } from '@nebular/theme';
import { LoginComponent } from 'src/app/user/components/login/login.component';
import { User } from 'src/app/user/models/user.model';
import { UserAuthenticationService } from 'src/app/user/services/user-authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _url: string = environment.apiUrl;
  currentUser: User = {};

  userLinks = [
    {
      title: 'Profil',
      icon: 'person'
    },
    {
      title: 'Se déconnecter',
      icon: 'log-out'
    },
  ];

  constructor(
    private _userAuthenticationService: UserAuthenticationService,
    private _loginDialogService: NbDialogService,
    private _userLinksMenuService: NbMenuService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._userAuthenticationService.currentUserSubject.subscribe((u: User) => {
      this.currentUser = u;
      this.currentUser.picture = this._url + '/' + this.currentUser.picture;
    });
    this._userAuthenticationService.emitUser();
    this.onUserLinkClick();
  }

  openLoginDialog(): void {
    let loginDialogRef = this._loginDialogService.open(LoginComponent);

    loginDialogRef.onClose.subscribe((x: any) => {
      if (x != undefined) {
        this._userAuthenticationService.signIn(x.email, x.password);
      }
    });
  }

  disconnectUser(): void {
    this._userAuthenticationService.signOut();
  }

  onUserLinkClick(): void {
    this._userLinksMenuService.onItemClick().subscribe((userLink) => {
      switch (userLink.item.title) {
        case 'Profil': {
          this._router.navigate(['/user/' + this.currentUser.id]);
          break;
        }
        case 'Se déconnecter': {
          this.disconnectUser();
          break;
        }
      }
    })
  }
}