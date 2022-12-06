import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

/* Views */
import { Views } from './views';
/* Components */
import { Component } from './components';
import { TruncatePipe } from './core/pipes/truncate/truncate.pipe';
import { TextFieldModule } from '@angular/cdk/text-field';

@NgModule({
  declarations: [
    AppComponent,
    Views.HomeComponent,
    Views.CreateBlogComponent,
    Views.OnboardComponent,
    Component.NavbarComponent,
    Component.CardComponent,
    Component.IconComponent,
    Component.ButtonComponent,
    Component.InputComponent,
    Component.CardComponent,
    Component.MarkdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    TextFieldModule,
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
