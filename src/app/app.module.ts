import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';
import { DataScienceComponent } from './data-science/data-science.component';
import { AutomationComponent } from './automation/automation.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DataScienceComponent,
    AutomationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
