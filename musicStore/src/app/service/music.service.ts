import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../models/music/music.module';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private apiUrl = "https://friendly-space-fortnight-49q679j9gg5hqqrw-3000.app.github.dev/music"

  constructor(private http:HttpClient) { }

  getProducts():Observable<Music[]>{
    return this.http.get<Music[]>(this.apiUrl)
  }
  
  // 
  getProductById(id:number):Observable<Music>{
    return this.http.get<Music>(`${this.apiUrl}/${id}`)
  }

  //

  addPRoduct(p:Music):Observable<Music>{
    return this.http.post<Music>(this.apiUrl,p)
  }

  deleteById(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  //

  updateById(p:Music):Observable<Music>{
    return this.http.put<Music>(`${this.apiUrl}/${p.id}`,p)
  }
}
