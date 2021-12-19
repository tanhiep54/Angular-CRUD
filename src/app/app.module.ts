import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { AddDialogComponent } from './shared/components/add-dialog/add-dialog.component';
import { EditDialogComponent } from './shared/components/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './shared/components/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent, DialogComponent, AddDialogComponent, EditDialogComponent, DeleteDialogComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
