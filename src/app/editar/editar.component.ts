import { Component } from '@angular/core';
import { CharactersService } from '../characters.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  constructor(public personajesservice: CharactersService, public route :ActivatedRoute) {}

  protected personaje_id :any;

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
  ngOnInit() {
  let personaje :any;  
  this.route.paramMap.subscribe((params) => {
    this.personaje_id = params.get('id');
  });
  console.log(this.personaje_id)
  this.personajesservice.get_character(this.personaje_id).subscribe((data: any) => {
    personaje = data
    if (data !=null){
      this.form_personaje.setValue(data);
    }else{
      alert("Error")
    }
  });

}

enviar(){
  let data = this.form_personaje.value;
  console.log(data)
  this.personajesservice.update_character(this.form_personaje.value,this.personaje_id)
}

}
