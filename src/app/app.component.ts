import { Component } from '@angular/core';
import {MenuTitleComponent} from './components/menu-title/menu-title.component'
import {HomeComponent} from './pages/home/home.component'
import {MenuBarComponent} from './components/menu-bar/menu-bar.component'
import { RouterLink, RouterOutlet } from '@angular/router';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuTitleComponent, HomeComponent, MenuBarComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
