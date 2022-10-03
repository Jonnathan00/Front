import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlEndPoint: string = 'http://backendista-env.eba-2mnjvcgn.us-east-1.elasticbeanstalk.com/api/personas';
  //private urlEndPoint: string = 'http://localhost:8080/api/auth/login';
  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {

    //return this.http.get<Persona[]>(this.urlEndPoint);

    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Persona[])
    );
  }  
}
