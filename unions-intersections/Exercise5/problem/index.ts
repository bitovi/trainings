interface BaseCharacter {
  strength: number;
  dexterity: number;
  intelligence: number;
}

interface Warrior {
  weapon: "Sword";
}

interface Wizard {
  weapon: "Staff";
  magic: true;
}

interface Rogue {
  weapon: "Bow";
}

type Character = never; // Fix this!

const fighter: Character = {
  strength: 15,
  dexterity: 10,
  intelligence: 8,
  weapon: "Sword",
};

const mage: Character = {
  strength: 5,
  dexterity: 8,
  intelligence: 15,
  weapon: "Staff",
};

const thief: Character = {
  strength: 10,
  dexterity: 15,
  intelligence: 8,
  weapon: "Bow",
};

// This should be an error, a sword character cannot be magic!
const paladin: Character = {
  strength: 15,
  dexterity: 10,
  intelligence: 8,
  weapon: "Sword",
  magic: true,
};

// This should be an error, a weapon is required on the Character type!
const civilian: Character = {
  strength: 8,
  dexterity: 8,
  intelligence: 8,
};

console.info(fighter, mage, thief, paladin, civilian);
