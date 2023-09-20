const peopleData = [
  { name: "Luke Skywalker", age: 21, occupation: "Jedi" },
  { name: "John Snow", age: 25, occupation: "Ranger" },
  { name: "Buzz Lightyear", age: 32, occupation: "Space Ranger" },
  { name: "John McClane", age: 35, occupation: "Cop" },
  { name: "Frodo Baggins", age: 50, occupation: "Hobbit" },
  { name: "Harry Potter", age: 21, occupation: "Wizard" },
  { name: "Indiana Jones", age: 35, occupation: "Archeologist" },
  { name: "James Bond", age: 35, occupation: "Spy" },
  { name: "Bruce Wayne", age: 35, occupation: "Batman" },
  { name: "Jack Sparrow", age: 35, occupation: "Pirate" },
];

function delay(delay: number, value: any, error = false) {
  return new Promise((resolve, reject) =>
    setTimeout(error ? reject : resolve, delay, value)
  );
}

export const fetch = async (url: string): Promise<any> => {
  if (url.includes("empty")) {
    return delay(1500, []);
  } else if (url.includes("error")) {
    return delay(
      2000,
      { message: "Too many requests. Please try again!" },
      true
    );
  } else if (url.includes("revalidate")) {
    peopleData[0].age = 32;
    peopleData[0].occupation = "Jedi Knight";
    peopleData[1].age = 28;
    peopleData[1].occupation = "King in the North";
    peopleData[3].age = 55;
    peopleData[3].occupation = "Retired Cop";
    peopleData[4].age = 60;
    peopleData[4].occupation = "Ring Bearer";
    peopleData[5].age = 25;
    peopleData[5].occupation = "Auror";
    peopleData[6].age = 45;
    peopleData[6].occupation = "Professor";
    peopleData[7].age = 45;
    peopleData[7].occupation = "Double O Agent";
    peopleData[8].age = 45;
    peopleData[9].age = 45;
    peopleData[9].occupation = "Captain";

    return delay(2000, peopleData);
  } else {
    return delay(2000, peopleData);
  }
};
