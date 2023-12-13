import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css',
})
export class PersonajesComponent {
  protected random_number: number = Math.trunc(Math.random() * 42 + 1);
  protected url: string = 'http://localhost:3000/personajes';
  protected response: any;
  protected loaded: boolean = false;
  constructor(public personajesservice: CharactersService) {}

  delete(id: any){
    this.personajesservice.delete_character(id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.personajesservice.get_characters().subscribe((data: any) => {
      this.response = data
      if (this.response !=null){
        this.loaded = true
      }
    });
    
  }
}
