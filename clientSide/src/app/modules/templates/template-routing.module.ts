import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const tmRoutes: Routes = [
    {
        path: 'learndatascience', component: HomeComponent,
        pathMatch: 'full'
    }
]