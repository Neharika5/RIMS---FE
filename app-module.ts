import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'; // if using routing
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // optional if routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
