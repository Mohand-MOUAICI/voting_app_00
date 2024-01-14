import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stat } from '../models/stat.model';
import { Resultvote } from '../models/resultvote.model';
import { Vote } from '../models/vote.model';
import { Candidat } from '../models/candidat.model';

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  hostVote = 'https://vzskf5okii.execute-api.us-east-1.amazonaws.com/prod/api/vote'
  hostCandidat = 'https://vzskf5okii.execute-api.us-east-1.amazonaws.com/prod/api/candidat'

  constructor(private http: HttpClient) {
  }

  onGetAllCandidat(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.hostCandidat + '/all')
  }

  onGetVoter(vote: Vote): Observable<Vote> {
    return this.http.post<Vote>(this.hostVote + '/voter', vote)
  }

  onGetResultVote(): Observable<Resultvote[]> {
    return this.http.get<Resultvote[]>(this.hostVote + '/resultsVote')
  }

  onGetStat(): Observable<Stat> {
    return this.http.get<Stat>(this.hostVote + '/stats')
  }
}
