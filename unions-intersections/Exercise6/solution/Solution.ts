// Solution #1
//  - Use type discrimnation: unique type property on each shape
//  - Update type guard to check for unique type property
// Solution #2
//  - Update type guard to check whether shape has radius, width, or base

interface Circle {
  shape: "circle";
  color: string;
  radius: number;
}

interface Rectangle {
  shape: "rectangle";
  color: string;
  width: number;
  height: number;
}

interface Triangle {
  shape: "triangle";
  color: string;
  base: number;
  height: number;
}

type Shape = Circle | Rectangle | Triangle;

export function isCircle(shape: Shape): shape is Circle {
  return shape.shape === "circle";
  // or
  // return "radius" in shape;
}

export function isRectangle(shape: Shape): shape is Rectangle {
  return shape.shape === "rectangle";
  // or
  // return "width" in shape;
}

export function isTriangle(shape: Shape): shape is Triangle {
  return shape.shape === "triangle";
  // or
  // return "base" in shape;
}

export function calculateTotalArea(shapes: Shape[]) {
  shapes.reduce((total, shape) => {
    if (isCircle(shape)) {
      return total + Math.PI * shape.radius ** 2;
    } else if (isRectangle(shape)) {
      return total + shape.width * shape.height;
    }
    return total + (shape.base * shape.height) / 2;
  }, 0);
}

const shapes: Shape[] = [
  { shape: "circle", color: "red", radius: 10 },
  { shape: "rectangle", color: "green", width: 10, height: 10 },
  { shape: "triangle", color: "blue", base: 10, height: 10 },
  { shape: "circle", color: "orange", radius: 5 },
  { shape: "rectangle", color: "yellow", width: 5, height: 5 },
  { shape: "triangle", color: "purple", base: 5, height: 5 },
];

calculateTotalArea(shapes);
