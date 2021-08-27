import React from 'react';
import { loadShapes, Shape, Coordinate } from './api';

import './drawingCanvas.css'

function getCanvasLocation(canvas: HTMLCanvasElement, event: MouseEvent): Coordinate {
  return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
}

function drawLine(canvas: HTMLCanvasElement, startPosition: Coordinate, stopPosition: Coordinate) {
  const context = canvas.getContext('2d');
  if (context) {
    context.beginPath();
    context.moveTo(startPosition.x, startPosition.y);
    context.lineTo(stopPosition.x, stopPosition.y);
    context.closePath();

    context.stroke();
  }
};

function DrawingCanvas() {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const [startPosition, setStartPosition] = React.useState<Coordinate | null>(null);

  const onClick = React.useCallback((event: MouseEvent) => {
    if (!ref.current) {
      return;
    }

    const clickLocation = getCanvasLocation(ref.current, event);
    if (!startPosition) {
      setStartPosition(clickLocation);
    } else {
      drawLine(ref.current, startPosition, clickLocation);
      setStartPosition(null);
    }
  }, [startPosition]);

  const clear = React.useCallback(() => {
    if (!ref.current) {
      return;
    }

    const canvas: HTMLCanvasElement = ref.current;
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  React.useEffect(() => {
    const canvas = ref.current;

    if (canvas) {
      loadShapes().then((shapes: Shape[]) => {
        shapes.forEach((shape: Shape) => {
          drawLine(canvas, shape.coordinates[0], shape.coordinates[1]);
        });
      });
    }
  });

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const canvas: HTMLCanvasElement = ref.current;
    canvas.addEventListener('mousedown', onClick);
    return () => {
      canvas.removeEventListener('mousedown', onClick);
    };
  }, [onClick]);

  return (
    <React.Fragment>
      <div>
        <canvas ref={ref} className="drawingCanvas" id="drawingCanvas" data-cy="theCanvas" width={800} height={600}>
          <p>Please update to a browser which supports html5 canvas objects.</p>
        </canvas>
      </div>
      <div>
        <button data-cy="clearButton" onClick={clear}>Clear</button>
      </div>
    </React.Fragment>
  )
}

export { DrawingCanvas };
