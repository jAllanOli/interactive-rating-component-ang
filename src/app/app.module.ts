import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RatingAreaComponent } from './rating-area/rating-area.component';
import { FinalAreaComponent } from './final-area/final-area.component';

@NgModule({
  declarations: [AppComponent, RatingAreaComponent, FinalAreaComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
