export enum ShapeType {
  LINE = 'line',
}

export type Coordinate = {
  x: number;
  y: number;
}

export type Shape = {
  type: ShapeType;
  coordinates: Coordinate[];
}
