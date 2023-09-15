interface Shape {
  name: string;
  sides: number;
}

interface Color {
  name: string;
  hexCode: string;
}

type ColoredShape = Shape & Color; // Fix this!

const Square: ColoredShape = {
  name: "Square",
  hexCode: "#ff0000",
  sides: 4,
};
