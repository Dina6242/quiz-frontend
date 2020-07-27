import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable()

export class ApiService {

  private  selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  constructor(private  http: HttpClient) {}
  // tslint:disable-next-line:typedef
  getQuestions(){
     return this.http.get('http://localhost:60197/api/questions');
    }
    postQuestion(question): void {
    this.http.post('http://localhost:60197/api/questions', question).subscribe( res => {
      console.log(res);
    });
  }
    putQuestion(question): void{
      this.http.put('http://localhost:60197/api/questions', + question.id).subscribe( res => {
        console.log(res);
      });
    }
  selectQuestion(question): void {
    this.selectedQuestion.next(question);
  }
}
