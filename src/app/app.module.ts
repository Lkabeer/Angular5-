import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD9So210jCG-T8dMyWs5xZ9ghaZjoFk_84",
  authDomain: "simple-angular-4-app-x-team.firebaseapp.com",
  databaseURL: "https://simple-angular-4-app-x-team.firebaseio.com",
  projectId: "simple-angular-4-app-x-team",
  storageBucket: "simple-angular-4-app-x-team.appspot.com",
  messagingSenderId: "916445040459"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
