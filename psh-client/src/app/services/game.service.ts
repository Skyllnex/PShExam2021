import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  url: string = environment.webApiUrl;

  constructor(
    private http: HttpClient
  ) {}

  getGame(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.url}games/${id}`);
  }

  listGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.url}games`);
  }

  addGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.url}games`, game);
  }

  editGame(game: Game): Observable<any> {
    return this.http.put<Game>(`${this.url}games/${game.id}`, game);
  }

  removeGame(id: number): Observable<any> {
    return this.http.delete<Game>(`/games/${id}`);
  }
}
