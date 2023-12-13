import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharactersService} from "../characters.service"
import { StatusPipe } from '../status.pipe';


@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [StatusPipe],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {

 constructor(public personajesservice: CharactersService, public route : ActivatedRoute) {}


  protected personaje_id :any;
  protected  personaje :any;
  protected loaded:boolean = false;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.personaje_id = params.get('id');
    });
    this.personajesservice.get_character(this.personaje_id).subscribe((data: any) => {
      this.personaje = data
      console.log(data)
      if (data !=null){
        this.loaded = true
      }
    });
    
  }

}
