import { Component } from '@angular/core';
import {ApiService} from './api.service';
@Component ({
  selector:  'app-question',
  templateUrl: './question.component.html'
})
export class QuestionComponent {
   question = {text: '' };
  // tslint:disable-next-line:typedef
  constructor(private  api: ApiService){}
  // tslint:disable-next-line:typedef
  post(question) {
    this.api.post(question);
  }
}
