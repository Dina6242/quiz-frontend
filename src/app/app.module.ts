import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { QuestionComponent} from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';
import {ApiService} from './api.service';
import { QuestionsComponent} from './questions.component';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { MatToolbarModule} from '@angular/material/toolbar';
import {HomeComponent} from './home.component';
import {QuizComponent} from './quiz.component';
import {NavComponent} from './nav.component';
import {QuizzesComponent} from './quizzes.component';
import {RegisterComponent} from './register.component';
import { LoginComponent} from './login.component';
import { AuthService} from './auth.service';
import {AuthInterceptor} from './auth.interceptor';
import { PlayComponent} from './play.component';
import { PlayQuizComponent} from './playQuiz.component';

const routes = [
  {path : '' , component: HomeComponent},
  {path : 'question' , component: QuestionComponent},
  {path : 'question/:quizId' , component: QuestionComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path : 'quiz' , component: QuizComponent},
  {path : 'play' , component: PlayComponent},
  {path : 'playQuiz/:quizId' , component: PlayQuizComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    QuizComponent,
    NavComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent
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
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
