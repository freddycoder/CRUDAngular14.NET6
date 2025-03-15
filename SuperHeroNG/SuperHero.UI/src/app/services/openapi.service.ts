import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/super-hero';
import { OpenAPI } from '../models/openapi';

@Injectable({
  providedIn: 'root'
})
export class OpenApiService {
  private readonly http = inject(HttpClient);

  public getOpenAPISpec(): Observable<OpenAPI> {
    return this.http.get<OpenAPI>(`${environment.apiUrl}/swagger/v1/swagger.json`);
  }

  public get<T>(entity: string): Observable<T[]> {
    return this.http.get<T[]>(`${environment.apiUrl}/${entity}`);
  }

  public update<T>(entity: string, hero: SuperHero): Observable<T[]> {
    return this.http.put<T[]>(`${environment.apiUrl}/${entity}`, hero);
  }

  public create<T>(entity: string, hero: T): Observable<T[]> {
    return this.http.post<T[]>(`${environment.apiUrl}/${entity}`, hero);
  }

  public delete<T>(entity: string, id: any): Observable<T[]> {
    return this.http.delete<T[]>(`${environment.apiUrl}/${entity}/${id}`);
  }
}
