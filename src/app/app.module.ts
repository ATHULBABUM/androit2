import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
// import { MaterialModule } from './material/material.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule,MatFormFieldModule,MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  //  MaterialModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
