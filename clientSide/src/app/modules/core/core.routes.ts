import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const coreRoutes: Routes = [
    {
        path: '', component: PageNotFoundComponent,
        pathMatch: 'full'
    },
    {
        path: '**', redirectTo: '/',
        pathMatch: 'full'
    }
]