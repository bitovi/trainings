interface Dog {
  animalType: "canine";
  age: number;
  name: string;
}

interface Cat {
  animalType: "feline";
  age: number;
  name: string;
}

type Pet = Cat | Dog; // Fixed!

const cat: Pet = {
  animalType: "feline",
  age: 10,
  name: "Garfield",
};

const dog: Pet = {
  animalType: "canine",
  age: 6,
  name: "Clifford",
};
