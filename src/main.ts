import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(withJsonpSupport()) 
    ],
  }).catch((err) => console.error(err));