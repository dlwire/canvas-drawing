import { Shape } from './types';

export function sendGetShapes(): Promise<Shape[]> {
  return fetch(
    `http://localhost:5000/get-shapes`,
    {
      method: "GET",
    }
  ).then(res => res.json())
  .then(({ shapes }) => shapes)
  .catch(error => console.error(error));
}

export function sendClear(): Promise<void> {
  return fetch(
    'http://localhost:5000/clear',
    {
      method: "POST",
    }
  ).then(() => {})
  .catch(error => console.error(error));
}

export function sendAddShape(shape: Shape): Promise<void> {
  return fetch(
    'http://localhost:5000/add-shape',
    {
      method: "POST",
      mode: 'no-cors',
      body: JSON.stringify(shape)
    }
  ).then(() => {})
  .catch(error => console.error(error));
}
