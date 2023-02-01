import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './screens/home/home.component';
import { ForgotPasswordComponent } from './screens/account/forgot-password/forgot-password.component';
import { LoginComponent } from './screens/account/login/login.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'home',
  //   pathMatch:'full'
  // },
  // {
  //   path:'home',
  //   component:HomeComponent
  // },
  // {
  //   path:'about',
  //   component:AboutComponent
  // }

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'account',
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
      },
      {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
    ]
  },
  
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
