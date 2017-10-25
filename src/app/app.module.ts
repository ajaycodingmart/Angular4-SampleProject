import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DefaultComponent } from './components/default/default.component';
import { Page1Component } from './components/page1/page1.component';
import { firstService } from '../services/first.service'


import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';

const routes: Routes = [
	{path: '', component:DefaultComponent},
	{path: '1', component:Page1Component},
	{path: '2', component:Page1Component}
]
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpModule,
   	RouterModule.forRoot(routes)
  ],
  providers: [
  	firstService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
