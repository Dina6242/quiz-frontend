import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {ActivatedRoute} from '@angular/router';
import {Question} from './question';



@Component ({
  selector:  'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit{
   question: Partial<Question> =  {text: '', answer1: '', correctAnswer: '', answer2: '' , answer3: '' };
   quizId: number ;
   id: number;
  constructor(public  api: ApiService, private route: ActivatedRoute){}
  ngOnInit(): void{
        this.quizId  = Number(this.route.snapshot.paramMap.get('quizId'));
        this.api.questionSelected.subscribe(question => this.question = question);
  }


  post(question: Partial<Question> ): void {
    question.quizId = this.quizId ;
    this.api.postQuestion(question);
  }
}
