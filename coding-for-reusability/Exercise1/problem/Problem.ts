/*
Create a new type called APIResponse. 
This type should have two type parameters that will be used to 
create the response: one for its data property and another for 
its error property. It can have other attributes such as 
success, responseTime, etc.

Create another type called PokemonResponse that is an APIResponse using Pokemon, and PokemonError as its type arguments.
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

type APIResponse<> = {
/*TODO: implementation details */
}

type PokemonResponse<> = {
  /*TODO: implementation details */
};

///add data so that there is an error at first and the user can come to solution wiht no errors


export {};
