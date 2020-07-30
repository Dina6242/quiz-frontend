import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { QuestionComponent} from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {ApiService} from './api.service';
import { QuestionsComponent} from './questions.component';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule} from '@angular/material/toolbar';
import {HomeComponent} from './home.component';
import {QuizComponent} from './quiz.component';
import {NavComponent} from './nav.component';
import {QuizzesComponent} from './quizzes.component';

const routes = [
  {path : '' , component: HomeComponent},
  {path : 'question' , component: QuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path : 'quiz' , component: QuizComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    QuizComponent,
    NavComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
