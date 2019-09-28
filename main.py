from flask import Flask, escape, request, send_from_directory
import os

app = Flask(__name__, static_folder='spaceshark/build')

@app.route("/")
def main():
	return send_from_directory(app.static_folder, 'index.html')
    #name = request.args.get("name", "World")
    #return f'Hello, {escape(name)}'

@app.route("/<path:path>")
def static_proxy(path):
    """static folder serve"""
    file_name = path.split("/")[-1]
    dir_name = os.path.join(app.static_folder, "/".join(path.split("/")[:-1]))
    return send_from_directory(dir_name, file_name)
