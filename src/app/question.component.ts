import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {ActivatedRoute} from '@angular/router';

@Component ({
  selector:  'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit{
   question = {text: '', answer1: '', correctAnswer: '', answer2: '' , answer3: '', id : undefined};
   quizId ;
  // tslint:disable-next-line:typedef
  constructor(public  api: ApiService, private route: ActivatedRoute){}
  ngOnInit(): void{
        this.quizId  = this.route.snapshot.paramMap.get('quizId');
        this.api.questionSelected.subscribe(question => this.question = question);
  }


  // tslint:disable-next-line:typedef
  post(question) {
    question.quizId = this.quizId ;
    this.api.postQuestion(question);
  }
}
