import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { resolve } from 'url';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  $get(url: string): Promise<any> {
    return new Promise((resolve, reject)=> {
      this.httpClient.get(url).subscribe((response)=>{
        resolve(response);
      }, (err)=> {
        reject?reject(err):'';
      });
    });
  }
}
