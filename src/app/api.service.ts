import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()

export class ApiService {
  constructor(private  http: HttpClient) {}
  // tslint:disable-next-line:typedef
  getQuestions(){
     return this.http.get('http://localhost:60197/api/questions');
    }
    postQuestion(question){
    this.http.post('http://localhost:60197/api/questions', question).subscribe( res => {
      console.log(res);
    });
  }
}
