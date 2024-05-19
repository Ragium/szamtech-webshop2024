import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTreeModule } from '@angular/material/tree';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule,
    MatMenuModule,
    MatBadgeModule,
    MatExpansionModule,
    MatCardModule,
    MatTreeModule,
    MatTableModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    SharedModuleModule,
    AngularFireModule.initializeApp(environment.firebase),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"szamtech-webshop202441","appId":"1:668372263225:web:f9c17570290e68ff02c8e8","storageBucket":"szamtech-webshop202441.appspot.com","apiKey":"AIzaSyDXxrTwi_psCWIGzZ7fE-iNTh7Z2gPNMJQ","authDomain":"szamtech-webshop202441.firebaseapp.com","messagingSenderId":"668372263225","measurementId":"G-CPSTXEP7E4"}))
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
