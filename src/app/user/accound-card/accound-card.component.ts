import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { PokemonsService } from 'src/app/api/pokemons.service';
import { PokemonInterface } from 'src/app/interface/pokemon-interface';
@Component({
  selector: 'app-accound-card',
  templateUrl: './accound-card.component.html',
  styleUrls: ['./accound-card.component.scss'],
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})

export class AccoundCardComponent implements OnInit {

  pokemonsInterface: PokemonInterface[] | null = null;

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit() {
    this.fetchPokemonsById(22)
  }

  fetchPokemonsById(id: number) {
  this.pokemonService.fetchPokemonsById(id).subscribe(
      (response) => {
        this.pokemonsInterface = [response];
        console.log(this.pokemonsInterface);
      },
      (error) => {
        console.error("error", error);
      }
    );
  }
}
