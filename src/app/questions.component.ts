import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {ActivatedRoute} from '@angular/router';
import {Question} from './question';


@Component ({
  selector:  'app-questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  question = {text: '', answer1: '', correctAnswer: '', answer2: '' , answer3: ''};
   questions: Question[];
  constructor(public  api: ApiService, private route: ActivatedRoute){}
  ngOnInit(): void{
    const quizId  = Number(this.route.snapshot.paramMap.get('quizId'));
    this.api.getQuestions(quizId).subscribe( res => {
     this.questions = res;
    });
  }
}

