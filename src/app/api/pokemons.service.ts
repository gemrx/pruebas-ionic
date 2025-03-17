import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonInterface } from '../interface/pokemon-interface';

@Injectable({
  providedIn: 'root'
})

export class PokemonsService {
  private apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  constructor(private http: HttpClient) { }

  fetchPokemonsById(id: number): Observable<PokemonInterface> {
    return this.http.get<PokemonInterface>(`${this.apiUrl}/${id}`).pipe(
      map(response => ({
        id: response.id,
        name: response.name,
        weight: response.weight,
      }))
    );
  }
}
