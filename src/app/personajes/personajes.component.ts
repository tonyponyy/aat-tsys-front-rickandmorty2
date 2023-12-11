import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  protected random_number :number = Math.trunc(Math.random()*42 +1)
  protected url :string = "https://rickandmortyapi.com/api/character/?page="+this.random_number
  protected  response :any;
  protected loaded:boolean = false;
  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get(this.url).subscribe(
      result =>{
        this.response = result;
        this.loaded=true
      },
      error =>{
        console.log("error")
      }

    )
  }

}
