import React from 'react';

import './drawingCanvas.css'

type Coordinate = {
  x: number;
  y: number;
}

function DrawingCanvas() {
  const ref = React.useRef<HTMLCanvasElement>(null);

  function getCanvasLocation(event: MouseEvent, canvas: HTMLCanvasElement): Coordinate {
    return { x: event.pageX - canvas.offsetLeft, y: event.pageY - canvas.offsetTop };
  }

  const onClick = React.useCallback((event: MouseEvent) => {
    if (!ref.current) {
      return;
    }

    console.log(getCanvasLocation(event, ref.current));
  }, []);

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
    <canvas ref={ref} className="drawingCanvas" id="drawingCanvas" data-cy="theCanvas" width={800} height={600}>
      <p>Please update to a browser which supports html5 canvas objects.</p>
    </canvas>
  )
}

export { DrawingCanvas };
