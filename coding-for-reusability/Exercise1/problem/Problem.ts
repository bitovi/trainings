/*
Create a new type called APIResponse. 
This type should accept two parameters that will be used to 
create the response: one for its data property and another for 
its error property. It can have other attributes such as 
success, responseTime, etc.
*/

type Pokemon = {
  name: string;
  attack: number;
  hp: number;
};

type PokemonError = {
  code: number;
  message: string;
};

type APIResponse = {
  /* implementation details */
};

type PokemonResponse = {
  /* implementation details */
};
