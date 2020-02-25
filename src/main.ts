import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

<<<<<<< HEAD
import { AppModule } from '../src/app.module';
import { environment } from '../environments/environment';
=======
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
>>>>>>> b31c949488eb1de1ee61926f09ddea82965b26d4

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
