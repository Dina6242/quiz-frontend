import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Quiz} from './quiz';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html'
})
export class QuizzesComponent implements OnInit {
  quiz = {text: '', answer1: '', correctAnswer: '', answer2: '', answer3: ''};
  quizzes: Quiz[];

  constructor(public  api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getQuizzes().subscribe(res => {
      this.quizzes = res;
    });
  }
}
