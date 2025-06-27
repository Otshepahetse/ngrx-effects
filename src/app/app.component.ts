import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayAmountsComponent } from "./components/display-amounts/display-amounts.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  imports: [DisplayAmountsComponent],
})
export class AppComponent {
  title = 'ngrx-effects';
}
