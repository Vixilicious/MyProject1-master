import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScoreboardService {
  private apiUrl = 'http://localhost:3000/scoreboards';

  constructor(private http: HttpClient) {}

  logScoreboard(rank: string, name: string, score: string, timestamp: string) {
    return this.http.post(this.apiUrl, { rank, name, score, timestamp });
  }
}
