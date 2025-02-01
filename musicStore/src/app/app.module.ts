import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewMusicComponent } from './components/view-music/view-music.component';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { EditMusicComponent } from './components/edit-music/edit-music.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SingleViewComponent } from './components/single-view/single-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewMusicComponent,
    AddMusicComponent,
    EditMusicComponent,
    SingleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
