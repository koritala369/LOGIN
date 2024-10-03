import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { RunComponent } from './app/run/run.component';
import { LoginComponent } from './app/login/login.component';
// import { HomeComponent } from './app/home/home.component';
// import { ForgotpasswordComponent } from './app/forgotpassword/forgotpassword.component';

bootstrapApplication(LoginComponent, appConfig)
  .catch((err) => console.error(err));
