import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWKRv2yxJxPTQ5vbuWjrNflEs0_y1y5htBQ&s"
  contentTitle:string="Em busca do Em"
  contentDescription:string="Ta dificil"

}
