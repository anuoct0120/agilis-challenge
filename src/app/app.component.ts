import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>', // Where your routes will be loaded
  imports: [RouterOutlet]
})
export class AppComponent { }
