import flask
from flask_cors import CORS
import json


app = flask.Flask(__name__)
CORS(app)

app.config["DEBUG"] = True


class ShapeStore():
    __shapes = []

    @classmethod
    def get_shapes(cls):
        return cls.__shapes

    @classmethod
    def clear(cls):
        cls.__shapes = []


@app.route('/get-shapes', methods=['GET'])
def get_shapes():
    return json.dumps({
        'shapes': ShapeStore.get_shapes()
    })


@app.route('/clear', methods=['POST'])
def clear():
    ShapeStore.clear()

    return ''


app.run()
