import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { StatusPipe } from '../status.pipe';


@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [HttpClientModule,StatusPipe],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  constructor(private route: ActivatedRoute,private http: HttpClient) { }
  protected personaje_id :any;
  protected  personaje :any;
  protected loaded:boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.personaje_id = params.get('id');
      let url :string = "https://rickandmortyapi.com/api/character/"+this.personaje_id
      this.http.get(url).subscribe(
        result =>{
          this.personaje = result;
          console.log(result)
          this.loaded=true
        },
        error =>{
          console.log("error")
        }
  
      )
    });
  }

}
