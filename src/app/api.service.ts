import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject} from 'rxjs';

@Injectable()

export class ApiService {

  private  selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private  selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private  http: HttpClient) {}
  // tslint:disable-next-line:typedef
  getQuestions(quizId){
     return this.http.get('http://localhost:60197/api/questions', quizId);
    }
  // tslint:disable-next-line:typedef
   getQuizzes() {
    return this.http.get('http://localhost:60197/api/quizzes');
  }
   getAllQuizzes(): any{
    return this.http.get('http://localhost:60197/api/quizzes/all');
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
  postQuiz(quiz): void {
    this.http.post('http://localhost:60197/api/quizzes', quiz).subscribe( res => {
      console.log(res);
    });
  }
  putQuiz(quiz): void{
    this.http.put('http://localhost:60197/api/quizzes', + quiz.id).subscribe( res => {
      console.log(res);
    });
  }
  selectQuestion(question): void {
    this.selectedQuestion.next(question);
  }
  selectQuiz(quiz): void {
    this.selectedQuiz.next(quiz);
  }
}
