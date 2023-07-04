import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioEnvioComponent } from './components/formulario-envio/formulario-envio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioEnvioComponent,
    ModalDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule, MatDatepickerModule,
    MatNativeDateModule,MatAutocompleteModule,
    HttpClientModule,MatButtonModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
