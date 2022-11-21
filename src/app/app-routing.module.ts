import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallecuboComponent } from './components/detallecubo/detallecubo.component';
import { HomecubosComponent } from './components/homecubos/homecubos.component';
import { LoginComponent } from './components/login/login.component';
import { MarcaComponent } from './components/marca/marca.component';
import { PerfiluserComponent } from './components/perfiluser/perfiluser.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path:"", component: HomecubosComponent},
  {path:"marcascubos/:marca", component: MarcaComponent},
  {path:"detallecubo/:id", component: DetallecuboComponent},
  {path:"registro", component: SigninComponent},
  {path:"login", component: LoginComponent},
  {path:"perfiluser", component: PerfiluserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
