import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // ✅ only if main.ts is in src/
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { ContactListComponent } from './app/components/contact-list/contact-list.component';
import { ContactFormComponent } from './app/components/contact-form/contact-form.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: ContactListComponent },
      { path: 'add', component: ContactFormComponent },
      { path: 'edit/:id', component: ContactFormComponent }
    ]),
    provideHttpClient()
  ]
});
