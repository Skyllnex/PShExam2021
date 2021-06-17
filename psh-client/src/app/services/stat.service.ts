import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stat } from '../models/stat';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  url: string = environment.webApiUrl;

  constructor(
    private http: HttpClient
  ) {}

  getStat(id: number): Observable<Stat> {
    return this.http.get<Stat>(`${this.url}stats/${id}`);
  }

  getLastGenerated(): Observable<Stat> {
    return this.http.get<Stat>(`${this.url}stats/lastgenerated`);
  }

  getHighscores(): Observable<Stat[]> {
    return this.http.get<Stat[]>(`${this.url}stats/highscores`);
  }

  listStats(): Observable<Stat[]> {
    return this.http.get<Stat[]>(`${this.url}stats`);
  }

  addStat(stat: Stat): Observable<Stat> {
    return this.http.post<Stat>(`${this.url}stats`, stat);
  }

  editStat(stat: Stat): Observable<any> {
    return this.http.put<Stat>(`${this.url}stats/${stat.id}`, stat);
  }

  removeStat(id: number): Observable<any> {
    return this.http.delete<Stat>(`/stats/${id}`);
  }
}
