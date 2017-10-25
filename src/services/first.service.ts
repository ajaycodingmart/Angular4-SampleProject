import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
 export class firstService{
 	constructor(private http: Http){}
 	 
	public pullFromServer(){
		let _url: string = 'https://api.myjson.com/bins/wxnp3';
		return this.http.get( _url )
	}
 }
