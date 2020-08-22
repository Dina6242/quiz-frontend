import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Component ({
  selector:  'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements  OnInit{
  quiz = {  text: ''};
  constructor(public  api: ApiService){}
  ngOnInit(): void{
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz);
  }
  }
