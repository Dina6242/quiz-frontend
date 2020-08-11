import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FinishedComponent} from './finished.component';


@Component ({
  templateUrl: './playQuiz.component.html'
})
export class PlayQuizComponent implements  OnInit{
  constructor(public  api: ApiService, private route: ActivatedRoute, private dialog: MatDialog ){}
  questions;
  quizId;
  question = {text: '', answer1: '', correctAnswer: '', answer2: '' , answer3: ''};
  step = 0;
  ngOnInit(): void{
  this.quizId  = this.route.snapshot.paramMap.get('quizId');
  this.api.getQuestions(this.quizId).subscribe( res => {
      this.questions = res;
      this.questions.forEach(q =>  {
        q.answers = [
          q.correctAnswer,
          q.answer1, q.answer2, q.answer3 ];
        shuffle(q.answers);
      });

    });
  }
  finish(): void {
    let correct = 0;
    this.questions.forEach(q => {
      if (q.correctAnswer === q.selectedAnswer){
        correct ++ ;
      }
    });
    const dialogRef = this.dialog.open(FinishedComponent, {
      data: {correct, total: this.questions.length}
    });
    console.log(correct);
  }





  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): any{
    this.step++;
  }

  prevStep(): any{
    this.step--;
  }
}
function shuffle(a): void {
  for (let i = a.length ; i ; i--) {
    const j = Math.floor(Math.random() * i );
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }}
