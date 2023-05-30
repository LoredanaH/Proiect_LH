import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './componente/forgot-password/forgot-password.component';
import { LoginComponent } from './componente/login/login.component';
import { RegisterComponent } from './componente/register/register.component';
import { VerifyEmailComponent } from './componente/verify-email/verify-email.component';
import { ContComponent } from './pagini/cont/cont.component';
import { CosComponent } from './pagini/cos/cos.component';
import { HomeComponent } from './pagini/home/home.component';
import { ProduseComponent } from './pagini/produse/produse.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'produse',component:ProduseComponent},
  {path:'cos',component:CosComponent},
  {path:'cont',component:LoginComponent},

  /*{path:'', redirectTo:'file-upload', pathMatch:'full'},*/
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path: 'verify-email', component : VerifyEmailComponent},
  {path: 'forgot-password', component : ForgotPasswordComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
