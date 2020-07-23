import { Component } from '@angular/core';
import {ApiService} from './api.service';
@Component ({
  selector:  'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent {
  question = {text: '', answer1: '', correctAnswer: '', answer2: '' , answer3: ''};
  // tslint:disable-next-line:typedef
  constructor(private  api: ApiService){}
  ngOnInit(){
    this.api.getQuestions().subscribe( res => {
      console.log(res);
    })
  }
  // tslint:disable-next-line:typedef
  post(question) {
    this.api.postQuestion(question);
  }
}

