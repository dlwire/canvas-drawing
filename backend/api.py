import flask
from flask import request
from flask_cors import CORS
import json


app = flask.Flask(__name__)
CORS(app)

app.config["DEBUG"] = True


class ShapeStore():
    __shapes = []

    @classmethod
    def add_shape(cls, shape):
        cls.__shapes.append(shape)

    @classmethod
    def clear(cls):
        cls.__shapes = []

    @classmethod
    def get_shapes(cls):
        return cls.__shapes


@app.route('/get-shapes', methods=['GET'])
def get_shapes():
    return json.dumps({
        'shapes': ShapeStore.get_shapes()
    })


@app.route('/clear', methods=['POST'])
def clear():
    ShapeStore.clear()

    return ''


@app.route('/add-shape', methods=['POST'])
def add_shape():
    new_shape = json.loads(request.data)
    ShapeStore.add_shape(new_shape)

    return ''


app.run()
