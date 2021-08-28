import React from 'react';
import { sendAddShape, sendClear, sendGetShapes } from './api';
import { Coordinate, Shape, ShapeType } from './types';
import { DRAWERS, getCanvasLocation, throttle } from './utils';

import './drawingCanvas.css'

function DrawingCanvas() {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const [startPosition, setStartPosition] = React.useState<Coordinate | null>(null);
  const [drawingShape, setDrawingShape] = React.useState<ShapeType>(ShapeType.LINE);

  const onClick = React.useCallback((event: MouseEvent) => {
    if (!ref.current) {
      return;
    }

    const clickLocation = getCanvasLocation(ref.current, event);
    if (!startPosition) {
      setStartPosition(clickLocation);
    } else {
      DRAWERS[drawingShape](ref.current, startPosition, clickLocation);
      setStartPosition(null);
      sendAddShape({ type: drawingShape, coordinates: [startPosition, clickLocation]});
    }
  }, [drawingShape, startPosition]);

  const clear = React.useCallback(() => {
    sendClear().then(() => {
      if (!ref.current) {
        return;
      }

      const canvas: HTMLCanvasElement = ref.current;
      const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    });
  }, []);

  React.useEffect(() => {
    const canvas = ref.current;

    if (canvas) {
      sendGetShapes().then((shapes: Shape[]) => {
        shapes.forEach((shape: Shape) => {
          console.log(shape);
          DRAWERS[shape.type](canvas, shape.coordinates[0], shape.coordinates[1]);
        });
      });
    }
  }, []);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const canvas: HTMLCanvasElement = ref.current;
    const throttledOnClick = throttle(onClick);
    canvas.addEventListener('mousedown', throttledOnClick);
    return () => {
      canvas.removeEventListener('mousedown', throttledOnClick);
    };
  }, [onClick]);

  return (
    <React.Fragment>
      <div>
        <canvas ref={ref} className="drawingCanvas" id="drawingCanvas" data-cy="theCanvas" width={800} height={600}>
          <p>Please update to a browser which supports html5 canvas objects.</p>
        </canvas>
      </div>
      <div className="actions">
        <div className="buttonGroup">
          <button className="button" data-cy="clearButton" onClick={clear}>Clear</button>
          <button className={drawingShape === ShapeType.LINE ? "button selected" : "button"} data-cy="lineButton" onClick={() => setDrawingShape(ShapeType.LINE)}>Line</button>
          <button className={drawingShape === ShapeType.RECTANGLE ? "button selected" : "button"} data-cy="rectangleButton" onClick={() => setDrawingShape(ShapeType.RECTANGLE)}>Rectangle</button>
        </div>
      </div>
    </React.Fragment>
  )
}

export { DrawingCanvas };
