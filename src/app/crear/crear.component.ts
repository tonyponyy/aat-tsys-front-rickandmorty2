import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CharactersService} from "../characters.service"


@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  constructor(public personajesservice: CharactersService) {}

  form_personaje = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(''),
    species: new FormControl(''),
    image: new FormControl(''),
    gender: new FormControl(''),
    origin: new FormControl(''),
    location: new FormControl(''),
  });
  

enviar(){
  this.personajesservice.add_character(this.form_personaje.value)
}
  
}

