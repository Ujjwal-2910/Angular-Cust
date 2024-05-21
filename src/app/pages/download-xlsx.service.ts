import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  private baseUrl = 'http://localhost:5022/api/Export';

  constructor(private http: HttpClient) { }

  generateAndSave(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/GenerateAndSave/${id}`, { responseType: 'text' });
  }

  downloadFile(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/DownloadFile/${id}`, { responseType: 'blob' });
  }
}
