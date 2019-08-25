import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBidingComponent } from './event-biding/event-biding.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { ToWayDataBindingComponent } from './to-way-data-binding/to-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBidingComponent,
    ToWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
