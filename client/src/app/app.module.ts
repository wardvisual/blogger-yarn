import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/* Views */
import { Views } from './views';
/* Componetns */
import { Component } from './components';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';

@NgModule({
  declarations: [
    AppComponent,
    Views.HomeComponent,
    Views.CreateBlogComponent,
    Views.BlogComponent.Create,
    Component.NavbarComponent,
    Component.CardComponent,
    Component.IconComponent,
    Component.ButtonComponent,
    Component.InputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    AngularMarkdownEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
