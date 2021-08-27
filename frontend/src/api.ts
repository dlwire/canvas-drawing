export type Coordinate = {
    x: number;
    y: number;
}

export type Shape = {
    coordinates: Coordinate[]
}

export function loadShapes(): Promise<Shape[]> {
    return new Promise<Shape[]>((resolve) => {
        resolve([]);
    });
}
