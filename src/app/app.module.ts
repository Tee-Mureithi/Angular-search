import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubAppComponent } from './components/github-app/github-app.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubProfileCardComponent } from './components/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './components/github-profile-data/github-profile-data.component';
import { GithubService } from './services/github.service';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { LandingComponent } from './components/landing/landing.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
     GithubReposComponent,
     LandingComponent,
     TestComponent
  ],
  imports: [
    
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule

  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
