import { InewPokemon } from "../types";
import { createElement, createImg } from "../utlites/domsHelpers";
import { capatialFirstLetter } from "../utlites/helpers";

export class PokemonsDetails {
  static render(pokemonData: InewPokemon, favorite = false) {
    return this.createUI(pokemonData, favorite);
  }

  static createUI(pokemonData: InewPokemon, favorite = false) {
    const [firstImg, ...resetImg] = pokemonData.img;
    const li = createElement(`<li id="${
      pokemonData.id
    }" class="pokemon_details">
    <span id = "heart"><i class="fa ${
      favorite ? "fa-heart" : "fa-heart-o"
    }" aria-hidden="true" ></i> </span>
     <div class="pokemon_img">${createImg(firstImg, [...resetImg])}</div>
     <div class="type_span">
     <span class="${pokemonData.type[0]}">${capatialFirstLetter(
      pokemonData.type[0]
    )}</span>
    </div>
    <div>
      <div class="name">
          <span>Name:</span>
          <span>${capatialFirstLetter(pokemonData.name)}</span>
      </div>

      <div class="physical_details">
        <span class="height">
          <span>Height:</span>
          <span>${pokemonData.height.toFixed(2)}M</span>
        </span>
        <span class="weight">
          <span>Weight:</span>
          <span>${pokemonData.weight.toFixed(2)}KG</span>
        </span>
      </div>
    </div>
    </li>`);
    return li;
  }
}
