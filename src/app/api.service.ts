import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Question} from './question';
import {Quiz} from './quiz';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private selectedQuestion = new Subject<Question>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<Quiz>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private  http: HttpClient) {
  }

  getQuestions(quizId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}questions/${quizId}`);
  }

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${environment.apiUrl}quizzes`);
  }

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${environment.apiUrl}quizzes/all`);
  }

  postQuestion(question: Question): void {
    this.http.post(`${environment.apiUrl}questions`, question).subscribe(res => {
      console.log(res);
    });
  }

  putQuestion(question: Question): void {
    this.http.put(`${environment.apiUrl}questions` + question.id, question).subscribe(res => {
      console.log(res);
    });
  }

  postQuiz(quiz: Partial<Quiz>): void {
    this.http.post(`${environment.apiUrl}quizzes`, quiz).subscribe(res => {
      console.log(res);
    });
  }

  putQuiz(quiz: Partial<Quiz>): void {
    this.http.put(`${environment.apiUrl}quizzes` + quiz.id, quiz).subscribe(res => {
      console.log(res);
    });
  }

  selectQuestion(question: Question): void {
    this.selectedQuestion.next(question);
  }

  selectQuiz(quiz: Quiz): void {
    this.selectedQuiz.next(quiz);
  }
}
