import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  /**
   * githubUserQuery */

  /**
   * githubUserQuery */

  public githubUserQuery!: any;
  public githubProfile: any;
  public githubRepos!: any[];
  public errorMessage!: string;

        constructor (private githubService:GithubService){}

  public SearchUser(){

    //TO GET THE USERS GITHUB PROFILE
    this.githubService.getProfile(this.githubUserQuery).subscribe((data)=>{
      this.githubProfile = data;
    } ,(error)=>{
      this.errorMessage = error;
    } );
   //TO GET THE GITHUB RPOSITORIES
    this.githubService.getRepos(this.githubUserQuery).subscribe((data)=>{
      this.githubRepos = data;

    },(error)=>{
       this.errorMessage = error;
    });
 
  }

  ngOnInit(): void {
  }

}
