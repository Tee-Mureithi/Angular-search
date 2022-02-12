import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/GithubCred';
import { refsToArray } from '@angular/compiler/src/render3/util';

@Injectable({
    providedIn:'root'
})
export class GithubService{
    constructor(private HttpClient:HttpClient) {}
    //For the Github Profile 
    public getProfile(SearchQuery: any){
        let dataURL = `https://api.github.com/users/${SearchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
        return this.HttpClient.get(dataURL).pipe(
           
        );
    }


    //For the Github Repositories



}