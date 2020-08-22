import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Quiz} from './quiz';

@Component ({
  selector:  'app-play',
  templateUrl: './play.component.html'
})
export class PlayComponent implements  OnInit{
  quizzes: Quiz[];
  constructor(public  api: ApiService){}
    ngOnInit(): void{
      this.api.getAllQuizzes().subscribe( res => {
        this.quizzes = res;
      });
  }
}
