/*
Fix our generic type APIResponse.

This type should have two generic type parameters that will be used to 
create the response: one for its data property and another for 
its error property.

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

type APIResponse<ResponseError> = {
  data: Data;
  error: ResponseError;
  success: boolean;
  responseTime: number;
};

type PokemonResponse = APIResponse<Pokemon>;



export {};
