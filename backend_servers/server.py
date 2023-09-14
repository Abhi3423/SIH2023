from flask import Flask,request,jsonify
from pkt_snif_new import run

import numpy as np
import pandas as pd
from flask import Flask, jsonify, render_template, redirect, request
from werkzeug.utils import secure_filename
from flask_cors import CORS

from model_predict import Predicted_Page

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Predictions'
app.config['UPLOAD_FOLDER'] = 'static/files'
root1=r'static\files'
cors = CORS(app, resources={r"/home": {"origins": "http://localhost:3000"},
                            r"/Predicted": {"origins": "http://localhost:3000"}})


@app.route('/')
def index():
    return "AIDefenceNet api V1.0.0 by AIDefenceNet Team (Hakuna Matata) for Smart India Hackathon 2023 is up and running!"

@app.route('/realtime/<string:token>')
def realtime(token):
    if request.method == "POST":
        duration = request.get_json()
        
        result_csv = run(token, duration)
        
        prediction_data = Predicted_Page(result_csv)
        
        print(prediction_data)
        
        return jsonify(prediction_data)
        
        
        

if __name__ == '__main__':
    app.run()
