// 1. Fill out the type guards: isCircle, isRectangle, and isTriangle.
// 2. Update the calculateTotalArea function to use the type guards
//    and calculate the total area of all shapes.

interface Circle {
  radius: number;
}

interface Rectangle {
  width: number;
  height: number;
}

interface Triangle {
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
    // circle area = total + Math.PI * shape.radius ** 2
    // rectangle area = total + shape.width * shape.height
    // triangle area = total + (shape.base * shape.height) / 2
  }, 0);
}

const shapes: Shape[] = [
  { radius: 10 },
  { width: 10, height: 10 },
  { base: 10, height: 10 },
  { radius: 5 },
  { width: 5, height: 5 },
  { base: 5, height: 5 },
];

console.log("total area:", calculateTotalArea(shapes));
