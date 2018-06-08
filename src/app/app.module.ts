import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pipes and custom directives
import { SecondsToTimeFormat } from './pipes/secondsToTimeFormat.pipe';
import { RedBorder} from './directives/redBorder.directive';

// Services
import { ArticlesService } from './services/articles.service';

// Custom components
import { TitleComponent } from './title/title.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FullScreenComponent,
    UserCardComponent,
    SecondsToTimeFormat,
    RedBorder,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
