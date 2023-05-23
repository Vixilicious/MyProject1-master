import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './components/services/user.service';
import { LogHistoryComponent } from './components/log-history/log-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    LogHistoryComponent,
  ],
  imports: [BrowserModule, FormsModule, DropDownListModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
