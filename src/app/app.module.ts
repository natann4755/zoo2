import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeastsPanelComponent } from './comp/panel/beasts-panel/beasts-panel.component';
import { BirdPanelComponent } from './comp/panel/bird-panel/bird-panel.component';
import { WildPanelComponent } from './comp/panel/wild-panel/wild-panel.component';
import { BeastsCardComponent } from './comp/cards/beasts-card/beasts-card.component';
import { BistCardComponent } from './comp/cards/bist-card/bist-card.component';
import { WildCardComponent } from './comp/cards/wild-card/wild-card.component';
import { HeadeirComponent } from './comp/general/headeir/headeir.component';
import { NavComponent } from './comp/general/nav/nav.component';
import { PaginatorComponent } from './comp/general/paginator/paginator.component';
import { FooterComponent } from './comp/general/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeastsPanelComponent,
    BirdPanelComponent,
    WildPanelComponent,
    BeastsCardComponent,
    BistCardComponent,
    WildCardComponent,
    HeadeirComponent,
    NavComponent,
    PaginatorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
