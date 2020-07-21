import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService {
  question = {};
  constructor(private  http: HttpClient) {}
  // tslint:disable-next-line:typedef
  post(question){
    this.http.post('http://localhost:60197/api/questions', question).subscribe( res => {
      console.log(res);
    });
  }
}
