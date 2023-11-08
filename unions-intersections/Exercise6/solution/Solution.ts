interface Circle {
  type: "circle";
  radius: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}

interface Triangle {
  type: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Rectangle | Triangle;

export function isCircle(shape: Shape): shape is Circle {
  return shape.type === "circle";
}

export function isRectangle(shape: Shape): shape is Rectangle {
  return shape.type === "rectangle";
}

export function isTriangle(shape: Shape): shape is Triangle {
  return shape.type === "triangle";
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
  { type: "circle", radius: 10 },
  { type: "rectangle", width: 10, height: 10 },
  { type: "triangle", base: 10, height: 10 },
  { type: "circle", radius: 5 },
  { type: "rectangle", width: 5, height: 5 },
  { type: "triangle", base: 5, height: 5 },
];

console.log("total area:", calculateTotalArea(shapes));
