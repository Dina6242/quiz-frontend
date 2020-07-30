import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component ({
  selector:  'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {

  quiz = {text: '', answer1: '', correctAnswer: '', answer2: '' , answer3: ''};
  quizzes ;
  constructor(public  api: ApiService){}
  ngOnInit(): void{
           this.api.getQuizzes().subscribe( res => {
            this.quizzes = res;
           });
  }
}
