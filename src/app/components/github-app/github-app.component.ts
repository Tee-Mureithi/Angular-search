import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
  
  /**
   * githubUserQuery */
  public githubUserQuery:string | undefined 
        constructor(){ }

  ngOnInit(): void {
  }

}
