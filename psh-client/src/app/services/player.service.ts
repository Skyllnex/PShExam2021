import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url: string = environment.webApiUrl;

  constructor(
    private http: HttpClient
  ) {}

  getPlayer(id: number): Observable<Player> {
    return this.http.get<Player>(`${this.url}players/${id}`);
  }

  listPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.url}players`);
  }

  addPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.url}players`, player);
  }

  editPlayer(player: Player): Observable<any> {
    return this.http.put<Player>(`${this.url}players/${player.id}`, player);
  }

  removePlayer(id: number): Observable<any> {
    return this.http.delete<Player>(`/players/${id}`);
  }
}
