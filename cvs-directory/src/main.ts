import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app/app.routes';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(appRoutes),
      provideHttpClient(),
    ],
  }).catch((err) => console.error(err));