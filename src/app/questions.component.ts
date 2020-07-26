import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component ({
  selector:  'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  question = {text: '', answer1: '', correctAnswer: '', answer2: '' , answer3: ''};
  questions ;
  // tslint:disable-next-line:typedef
  constructor(private  api: ApiService){}
  ngOnInit(): void{
    this.api.getQuestions().subscribe( res => {
      this.questions = res;
    });
  }
  // tslint:disable-next-line:typedef
  post(question) {
    this.api.postQuestion(question);
  }
}

