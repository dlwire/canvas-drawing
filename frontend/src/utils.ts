import { Coordinate } from './types';

export function throttle<T extends Function>(callback: T): T {
  let waiting = false;

  return function() {
      if (!waiting) {
          callback.apply(this, arguments);
          waiting = true;
          setTimeout(() => waiting = false, 300);
      }
  } as unknown as T;
}

export function getCanvasLocation(canvas: HTMLCanvasElement, event: MouseEvent): Coordinate {
  return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
}

export function drawLine(canvas: HTMLCanvasElement, startPosition: Coordinate, stopPosition: Coordinate) {
  const context = canvas.getContext('2d');
  if (context) {
    context.beginPath();
    context.moveTo(startPosition.x, startPosition.y);
    context.lineTo(stopPosition.x, stopPosition.y);
    context.closePath();

    context.stroke();
  }
};