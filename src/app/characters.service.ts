import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  protected http = inject(HttpClient);
  protected add_url: string = 'http://localhost:3000/personajes';
  protected get_url: string = 'http://localhost:3000/personajes';

  get_character(id :number) {
      let url: string = this.get_url + '/' + id;
      return this.http.get<any[]>(url);
  }
  delete_character(id :number) {
    let url: string = this.get_url + '/' + id;
    return this.http.delete<any[]>(url);
}
  get_characters(): Observable<any> {
    return this.http.get<any[]>(this.get_url);
  }
  add_character(personaje: any) {
    this.http.post(this.add_url, personaje).subscribe(
      (result) => {
        alert('Registro agregado correctamente');
      },
      (error) => {
        alert('error');
      }
    );
  }
  update_character(personaje: any,id :number) {
    this.http.put(this.add_url+"/"+id, personaje).subscribe(
      (result) => {
        console.log(result)
        alert('Registro actualizado correctamente');
      },
      (error) => {
        alert('error');
      }
    );
  }

}
