import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
@Component ({
  selector:  'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit{
   question = {text: '', answer1: '', correctAnswer: '', answer2: '' , answer3: '', id : null};
  // tslint:disable-next-line:typedef
  constructor(public  api: ApiService){}
  ngOnInit(): void{
        this.api.questionSelected.subscribe(question => this.question = question);
  }


  // tslint:disable-next-line:typedef
  post(question) {
    this.api.postQuestion(question);
  }
}
