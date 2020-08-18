import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Question} from './question';
import {Quiz} from './quiz';

@Injectable()

export  class ApiService {

  private  selectedQuestion = new Subject<Question>();
  questionSelected = this.selectedQuestion.asObservable();

  private  selectedQuiz = new Subject<Quiz>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private  http: HttpClient) {}
  getQuestions(quizId: number): Observable<Question[]>{
     return this.http.get<Question[]>(`http://localhost:60197/api/questions/${quizId}`);
    }
    getQuizzes(): Observable<Quiz>{
    return this.http.get<Quiz>('http://localhost:60197/api/quizzes');
  }
   getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>('http://localhost:60197/api/quizzes/all');
    }
    postQuestion(question: Question ): void {
    this.http.post('http://localhost:60197/api/questions', question).subscribe( res => {
      console.log(res);
    });
  }
    putQuestion(question: Question): void{
      this.http.put('http://localhost:60197/api/questions', + question.id).subscribe( res => {
        console.log(res);
      });
    }
  postQuiz(quiz: Quiz): void {
    this.http.post('http://localhost:60197/api/quizzes', quiz).subscribe( res => {
      console.log(res);
    });
  }
  putQuiz(quiz: Quiz ): void{
    this.http.put('http://localhost:60197/api/quizzes', + quiz.id).subscribe( res => {
      console.log(res);
    });
  }
  selectQuestion(question: Question ): void {
    this.selectedQuestion.next(question);
  }
  selectQuiz(quiz: Quiz): void {
    this.selectedQuiz.next(quiz);
  }
}
