import flask
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)

app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    return """{
        "content": "Hello world!"
        }"""

app.run()
