import 'semantic-ui-css/semantic.min.css'
import './drawingCanvas.css'

function DrawingCanvas() {
  return (
    <canvas className="drawingCanvas" id="drawingCanvas" data-testid="theCanvas" width={800} height={600}>
      <p>Please update to a browser which supports html5 canvas objects.</p>
    </canvas>
  )
}

export { DrawingCanvas };
