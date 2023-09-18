type LandDinosaur = {
  type: "land";
  name: string;
  ableToWalk: number;
  legLength: number;
};
type WaterDinosaur = {
  type: "water";
  name: string;
  ableToSwim: number;
  finLength: number;
};
type AirDinosaur = {
  type: "air";
  name: string;
  ableToFly: number;
  wingLength: number;
};

type Dinosaur = LandDinosaur | AirDinosaur | WaterDinosaur;
/*
{
  name: string        // common property
  ableToFly: number   // AirDinosaur
  wingLength: number  // AirDinosaur
  ableToSwim: number  // WaterDinosaur
  finLength: number   // WaterDinosaur
  ableToWalk: number  // LandDinosaur
  legLength: number   // LandDinosaur
}
*/

const pterodactyl: Dinosaur = {
  type: "air",
  name: "pterodactyl",
  ableToFly: 1,
  wingLength: 1,
};

console.info(pterodactyl);

/*
 Walk through trying to define a pterodactyl:
    - Start with the common property: name
    
    - TypeScript is complaining about the missing properties from one of the sub-Dinosaur types
    
    - So let's add the ableToFly property
    
    - Now TypeScript is able to narrow down the type to AirDinosaur, and is complaining about the
      missing wingLength property, so let's add it
    
    - TypeScript seems to be working, or is it?
    
    - What if we add the ableToSwim property?
    
    - TypeScript isn't complaining, what's going on?
    
    - The minimum properties to satisfy the AirDinosaur type have been met, so TypeScript is happy
    
    - Now we can continue to add any of the types from the union, and TypeScript won't complain so
      long as the minimum properties for ONE of the union types are met
 
 Let's comment out all the `_length` properties and see what happens:
    - TypeScript is complaining about the missing properties from one of the sub-Dinosaur types (ableTo_)
    
    - Without some type discrimination, we can't narrow down the type to one of the sub-Dinosaur types in a meaningful way!
    
    - So let's add the unique type literals to each sub-Dinosaur type, `type: "land", type: "water", type: "air"`
    
    - Now our pterodactyl object takes in a type property, and TypeScript is able to narrow down the type to AirDinosaur
    
    - We can now no longer pass in any of the other properties from the other sub-Dinosaur types.
*/
