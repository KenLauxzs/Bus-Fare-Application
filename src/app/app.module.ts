import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from  '@angular/fire/compat';
import { AngularFirestoreModule } from  '@angular/fire/compat/firestore/';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,
    AngularFireModule.initializeApp({    // initialize firebase config to connect this app to firebase database
      apiKey: "AIzaSyARUpQW0xrfkbDZvcsH7XqL_zzDP63h624",
      authDomain: "projectbus-12eb7.firebaseapp.com",
      projectId: "projectbus-12eb7",
      storageBucket: "projectbus-12eb7.appspot.com",
      messagingSenderId: "258631104963",
      appId: "1:258631104963:web:af88bf51555d6243416576"
    }),AngularFirestoreModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
