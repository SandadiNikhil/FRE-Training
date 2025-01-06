import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { CardComponent } from './components/card/card.component';
// import { ListComponent } from './components/list/list.component';
import { ColorService } from './services/color.service';
import { CommonModule } from '@angular/common';

@NgModule({
//   declarations: [
//     AppComponent, 
//     CardComponent,
//     ListComponent 
//   ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [ColorService],
  bootstrap: [] 
})
export class AppModule {}