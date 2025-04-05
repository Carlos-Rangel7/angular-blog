import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink, RouterOutlet } from '@angular/router';
import { dataFake } from '../../data/data';



@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = "";

  @Input()
  contentTitle: string = "Em busca do Em";

  @Input()
  contentDescription: string = "Ta dificil";
  private id:string | null ="0"

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value: ParamMap) => {
      this.id = value.get("id")
    });
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null ) {
    const result = dataFake.filter(article => article.id == id)[0]
  
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover

  }

}
