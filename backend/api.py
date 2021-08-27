import flask
from flask_cors import CORS
import json


app = flask.Flask(__name__)
CORS(app)

app.config["DEBUG"] = True


@app.route('/get-shapes', methods=['GET'])
def get_shapes():
    return json.dumps({
        'shapes': []
    })


app.run()
