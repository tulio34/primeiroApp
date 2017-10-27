import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('');
  }

  getLatesMovies(){
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=13de2c14bc2614defa1657a49e2cae98");
  }
}
