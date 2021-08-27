export type Coordinate = {
  x: number;
  y: number;
}

export type Shape = {
  coordinates: Coordinate[]
}

export function loadShapes(): Promise<Shape[]> {
  return fetch(
    `http://localhost:5000/get-shapes`,
    {
      method: "GET",
    }
  ).then(res => res.json())
  .then(({ shapes }) => shapes)
  .catch(error => console.log(error));
}
