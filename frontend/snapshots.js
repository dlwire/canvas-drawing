module.exports = {
  "__version": "8.3.0",
  "Drawing on the canvas": {
    "should allow switching drawing types": {
      "1": "<button class=\"button selected\"\n  data-cy=\"rectangleButton\">Rectangle</button>",
      "2": "<button class=\"button selected\"\n  data-cy=\"lineButton\">Line</button>"
    },
    "the canvas should be empty initially": {
      "1": "<div class=\"pageDiv\">\n  <h1>Cleerly Coding Challenge</h1>\n  <p>Since you got here you've already taken a look at the readme but here are a\n    couple notes that I didn't have time to do in the timebox but would do for\n    production work:</p>\n  <ul>\n    <li>Better balance between acceptance and unit tests. I played around with\n      cypress for e2e tests with this work and didn't spend time writing unit\n      tests.</li>\n    <li>Render the shape to be drawn on \"close\" - this is possible by tracking\n      the already drawn shapes and then redrawing them and the to-be-drawn shape\n      each time the to-be-drawn shape changes. We'd probably want to\n      debounce/throttle that.</li>\n    <li>Allow the drawing of rectangles at an angle - likely the best way to\n      accomplish this is to switch from a \"two click\" method of drawing\n      rectangles to a three click method.</li>\n    <li>Refactor - I think there's a fair bit of refactor which could be done\n      here and I'd probably bite off when I see how this code might be extended.\n      For instance, building up a context around the shape store would clean up\n      this main class a bit.</li>\n  </ul>\n  <div><canvas class=\"drawingCanvas\"\n      id=\"drawingCanvas\"\n      data-cy=\"theCanvas\"\n      width=\"800\"\n      height=\"600\">\n      <p>Please update to a browser which supports html5 canvas objects.</p>\n    </canvas></div>\n  <div class=\"actions\">\n    <div class=\"buttonGroup\"><button class=\"button\"\n        data-cy=\"clearButton\">Clear</button><button class=\"button selected\"\n        data-cy=\"lineButton\">Line</button><button class=\"button\"\n        data-cy=\"rectangleButton\">Rectangle</button></div>\n  </div>\n</div>"
    }
  }
}
