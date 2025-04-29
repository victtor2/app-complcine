import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
     provideFirebaseApp(() => initializeApp({
      "projectId":"app-webcompl",
      "appId":"1:489105257553:web:ff2579d2de1b245124f470",
      "storageBucket":"app-webcompl.firebasestorage.app",
      "apiKey":"AIzaSyDJ1Bqu5frtxQ4knCAdRnLwcaNuBuW86zY",
      "authDomain":"app-webcompl.firebaseapp.com",
      "messagingSenderId":"489105257553"})),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore())
  ]
};
