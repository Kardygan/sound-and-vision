import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbDialogModule, NbMenuModule, NbThemeModule } from '@nebular/theme';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TokenInterceptor } from './core/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
