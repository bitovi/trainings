type LandDinosaur = {
  name: string;
  ableToWalk: number;
  legLength: number;
};
type WaterDinosaur = {
  name: string;
  ableToSwim: number;
  finLength: number;
};
type AirDinosaur = {
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

const pterodactyl: Dinosaur = {};

console.info(pterodactyl);
