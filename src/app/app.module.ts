import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

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
    ArticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
