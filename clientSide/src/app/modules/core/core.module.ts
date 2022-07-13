import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    TemplatesModule
  ],
  providers: [],
  exports: [
    MainComponent
  ]
})
export class CoreModule { }
