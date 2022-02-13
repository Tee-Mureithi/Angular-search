import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/GithubCred';
import { refsToArray } from '@angular/compiler/src/render3/util';
import { catchError, throwError } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class GithubService{
    constructor(private HttpClient:HttpClient) {}
    //For the Github Profile
    public getProfile(SearchQuery: any){
        let dataURL = `https://api.github.com/users/${SearchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        return this.HttpClient.get<any>(dataURL).pipe(
           catchError(this.handleErrors)
        );
    }


    //For the GitHub Repositories
    public getRepos(SearchQuery: any[]){
        let dataURL = `https://api.github.com/users/${SearchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        return this.HttpClient.get<any[]>(dataURL).pipe(
           catchError(this.handleErrors)
        );
    }


     public handleErrors(error:HttpErrorResponse){
         let errorMessage:string;
         if(error.error instanceof ErrorEvent){
             //Clearly a client side error
             errorMessage = `MESSAGE:${error.error.message}`
         }
        else{
            //This is a Server side error
            errorMessage = `STATUS:${error.status} MESSAGE:${error.message}`
        }
        return throwError(errorMessage);
     }





}
