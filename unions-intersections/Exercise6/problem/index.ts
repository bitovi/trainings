// 1. Fill out the type guards: isCircle, isRectangle, and isTriangle.
// 2. Update the calculateTotalArea function to use the type guards
//    and calculate the total area of all shapes.

interface Circle {
  color: string;
  radius: number;
}

interface Rectangle {
  color: string;
  width: number;
  height: number;
}

interface Triangle {
  color: string;
  base: number;
  height: number;
}

type Shape = Circle | Rectangle | Triangle;

export function isCircle(shape: Shape): shape is Circle {
  /* TODO */
}

export function isRectangle(shape: Shape): shape is Rectangle {
  /* TODO */
}

export function isTriangle(shape: Shape): shape is Triangle {
  /* TODO */
}

export function calculateTotalArea(shapes: Shape[]) {
  shapes.reduce((total, shape) => {
    // circle -> total + Math.PI * shape.radius ** 2;
    // rectangle -> total + shape.width * shape.height;
    // triangle -> total + (shape.base * shape.height) / 2;
  }, 0);
}

const shapes: Shape[] = [
  { color: "red", radius: 10 },
  { color: "green", width: 10, height: 10 },
  { color: "blue", base: 10, height: 10 },
  { color: "orange", radius: 5 },
  { color: "yellow", width: 5, height: 5 },
  { color: "purple", base: 5, height: 5 },
];

calculateTotalArea(shapes);
