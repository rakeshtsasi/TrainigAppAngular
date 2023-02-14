import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './directive/test.directive';
import { HighlightDirective } from './directive/highlight.directive';
import { HomeComponent } from './screens/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { LoginComponent } from './screens/account/login/login.component';
import { ForgotPasswordComponent } from './screens/account/forgot-password/forgot-password.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    HighlightDirective,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ReversePipe,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
