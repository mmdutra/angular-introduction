import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { 
  MatSelectModule, 
  MatRadioModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule
} from '@angular/material';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SubNgIfComponent } from './ng-if/sub-ng-if/sub-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForFormComponent } from './ng-for-form/ng-for-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    NgIfComponent,
    SubNgIfComponent,
    NgForComponent,
    NgForFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
