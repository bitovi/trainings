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

let delayTime = 1522;// Default for the app

export function setDelayTime(timeInMilliseconds) {
  // Allows the time to be lowered for tests
  delayTime = timeInMilliseconds;
}

function delay(value: object, error = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(value);
      } else {
        resolve(value);
      }
    }, delayTime);
  });
}

export const fetch = async (url: string) => {
  try {
    let responseData;
    let status;
    let statusText;

    if (url.includes("empty")) {
      status = 200;
      statusText = "OK";
      responseData = await delay([]);
    } else if (url.includes("error")) {
      status = 429;
      statusText = "Too Many Requests";
      throw await delay({ message: "Too many requests. Please try again!" });
    } else if (url.includes("revalidate")) {
      status = 200;
      statusText = "OK";
      responseData = await delay(revalidatedData);
    } else {
      status = 200;
      statusText = "OK";
      responseData = await delay(peopleData);
    }

    // Mimicking a fetch-like response
    return {
      ok: status >= 200 && status < 300,
      status: status,
      statusText: statusText,
      json: () => Promise.resolve(responseData),
      text: () => Promise.resolve(JSON.stringify(responseData)),
    };
  } catch (errorData) {
    return {
      ok: false,
      status: errorData.status || 400,
      statusText: errorData.statusText || "Bad Request",
      json: () => Promise.reject(errorData),
      text: () => Promise.reject(JSON.stringify(errorData)),
    };
  }
};
