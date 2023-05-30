import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './elemente_din_pagini/header/header.component';
import { FooterComponent } from './elemente_din_pagini/footer/footer.component';
import { HomeComponent } from './pagini/home/home.component';
import { ProduseComponent } from './pagini/produse/produse.component';
import { FavoriteComponent } from './pagini/favorite/favorite.component';
import { CosComponent } from './pagini/cos/cos.component';
import { ContComponent } from './pagini/cont/cont.component';
import { BoxProdusComponent } from './elemente_din_pagini/box-produs/box-produs.component';
import { BoxCosComponent } from './elemente_din_pagini/box-cos/box-cos.component';
import { MatTableModule } from '@angular/material/table';
import { BoxContComponent } from './elemente_din_pagini/box-cont/box-cont.component';


import { FirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './componente/login/login.component';
import { RegisterComponent } from './componente/register/register.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';


import { environment } from '../../src/environments/environment';
import { VerifyEmailComponent } from './componente/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './componente/forgot-password/forgot-password.component';

import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { ComandaService } from './services/comanda.service';
import { ProdusService } from './services/produs.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ProduseComponent,
        FavoriteComponent,
        CosComponent,
        ContComponent,
        BoxProdusComponent,
        BoxCosComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        VerifyEmailComponent,
        ForgotPasswordComponent
    ],
    providers: [ComandaService],
    bootstrap: [AppComponent, BoxProdusComponent,BoxCosComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatTableModule,
        AngularFireModule.initializeApp(environment.firebase,'angularfs'),
        HttpClientModule,
        BoxContComponent,
        FirestoreModule,
        FormsModule,
        
    ]
})
export class AppModule { }
