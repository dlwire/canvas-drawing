export enum ShapeType {
    LINE = 'line',
    RECTANGLE = 'rectangle',
  }

  export type Coordinate = {
    x: number;
    y: number;
  }

  export type Shape = {
    type: ShapeType;
    coordinates: Coordinate[];
  }
