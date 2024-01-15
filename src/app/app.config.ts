import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { DefaultHttpInterceptor } from "./core/interceptor";
import { provideStore } from "@ngrx/store";
import { reducers, metaReducers } from "./components/counter/state";
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
        provide: HTTP_INTERCEPTORS,
        useClass: DefaultHttpInterceptor,
        multi: true,
    },
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
