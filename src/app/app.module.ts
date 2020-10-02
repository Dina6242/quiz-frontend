import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MatInputModule} from '@angular/material/input';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {QuestionComponent} from './question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuestionsComponent} from './questions.component';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {QuizComponent} from './quiz.component';
import {NavComponent} from './nav.component';
import {QuizzesComponent} from './quizzes.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';
import {AuthInterceptor} from './auth.interceptor';
import {PlayComponent} from './play.component';
import {PlayQuizComponent} from './playQuiz.component';
import {FinishedComponent} from './finished.component';
import {LoggedInGuard} from './loggedin.guard';
import {UnLoggedGuardGuard} from './unlogged-guard.guard';


const routes = [
  {path: 'question/:quizId', component: QuestionComponent, canActivate: [LoggedInGuard]},
  {path: 'register', component: RegisterComponent , canActivate: [UnLoggedGuardGuard]},
  {path: 'login', component: LoginComponent, canActivate: [UnLoggedGuardGuard] },
  {path: 'quiz', component: QuizComponent, canActivate: [LoggedInGuard]},
  {path: 'play', component: PlayComponent, canActivate: [LoggedInGuard]},
  {path: 'playQuiz/:quizId', component: PlayQuizComponent, canActivate: [LoggedInGuard]}

];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    QuizComponent,
    NavComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishedComponent
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
    MatRadioModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [LoggedInGuard, UnLoggedGuardGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [FinishedComponent]
})
export class AppModule {
}
