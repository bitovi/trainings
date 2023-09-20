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

const revalidatedData = [
  { name: "Luke Skywalker", age: 32, occupation: "Jedi Knight" },
  { name: "John Snow", age: 28, occupation: "King in the North" },
  { name: "Buzz Lightyear", age: 32, occupation: "Space Ranger" },
  { name: "John McClane", age: 55, occupation: "Retired Cop" },
  { name: "Frodo Baggins", age: 60, occupation: "Ring Bearer" },
  { name: "Harry Potter", age: 25, occupation: "Auror" },
  { name: "Indiana Jones", age: 45, occupation: "Professor" },
  { name: "James Bond", age: 45, occupation: "Double O Agent" },
  { name: "Bruce Wayne", age: 45, occupation: "Batman" },
  { name: "Jack Sparrow", age: 45, occupation: "Captain" },
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
    return delay(2000, revalidatedData);
  } else {
    return delay(2000, peopleData);
  }
};
