import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './/app-routing.module';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    LoginComponent,
    AccountComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
