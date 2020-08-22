import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Quiz} from './quiz';

@Component ({
  selector:  'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements  OnInit{
  quiz: Quiz ;
  // quizzes: Quiz;
  constructor(public  api: ApiService){}
  ngOnInit(): void{
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }
  }
