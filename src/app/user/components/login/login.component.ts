import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = this._builder.group([])

  constructor(
    private _loginDialogRef: NbDialogRef<LoginComponent>,
    private _builder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this._builder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    })
  }

  onLoginSubmit(): void {
    let loginInfo = { email: this.formGroup.value['email'], password: this.formGroup.value['password'] }
    this._loginDialogRef.close(loginInfo)
  }

  closeLoginDialog(): void {
    this._loginDialogRef.close();
  }

}
