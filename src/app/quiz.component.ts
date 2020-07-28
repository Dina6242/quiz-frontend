import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component ({
  selector:  'app-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent  {
  quiz: {'', id: {} , title: ''};
  constructor(public  api: ApiService){}
  }
