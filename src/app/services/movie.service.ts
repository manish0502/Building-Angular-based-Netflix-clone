import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../Models/movies';


const enum endpoint {

  latest ='/movie/latest',
  now_playing ='/movie/now_playing', 
  popular ='/movie/popular', 
  top_rated ='/movie/top_rated',  
  upcoming ='/movie/upcoming',
  trending ='/trending/all/week',
  originals ='/discover/tv'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private URL = 'https://api.themoviedb.org/3';

  //tslint:disabled
  private api_key = environment.api;
  

  constructor(private http: HttpClient) { }

  
  // getLatestMovie(): Observable<Movies> {
  //   return this.http.get<Movies>(`${this.URL}${endpoint.latest}`, {
  //     params: {
  //       api_key: this.api_key
  //     }
  //   });
  // }
  getLatestMovie(): Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.latest}`,{
      params:{
        api_key:this.api_key
      }
    });
  }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getOriginals(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.originals}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getPopularMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

  getTrending(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
      params: {
        api_key: this.api_key
      }
    });
  }

}

