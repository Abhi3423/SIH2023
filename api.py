from pickle import load
import numpy as np
import pandas as pd
import os
from wtforms.validators import InputRequired
from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
from sklearn.preprocessing import StandardScaler
from flask import Flask, jsonify, render_template, redirect, request
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Predictions'
app.config['UPLOAD_FOLDER'] = 'static/files'
root1=r'static\files'
cors = CORS(app, resources={r"/home": {"origins": "http://localhost:3000"},
                            r"/Predicted": {"origins": "http://localhost:3000"}})

model = load(open('model_rf.sav', 'rb'))
selected_features = [
    ' Flow Duration', 
    ' Total Fwd Packets',
    ' Total Backward Packets',
    'Total Length of Fwd Packets', 
    ' Total Length of Bwd Packets', 
    ' Fwd Packet Length Max', 
    ' Fwd Packet Length Min', 
    ' Fwd Packet Length Mean', 
    ' Fwd Packet Length Std',
    'Bwd Packet Length Max', 
    ' Bwd Packet Length Min', 
    ' Bwd Packet Length Mean', 
    ' Bwd Packet Length Std',
    # Flow Bytes/s, Flow Packets/s, 
    ' Flow IAT Mean', 
    ' Flow IAT Std', 
    ' Flow IAT Max', 
    ' Flow IAT Min',
    'Fwd IAT Total', 
    ' Fwd IAT Mean', 
    ' Fwd IAT Std', 
    ' Fwd IAT Max', 
    ' Fwd IAT Min',
    'Bwd IAT Total', 
    ' Bwd IAT Mean', 
    ' Bwd IAT Std', 
    ' Bwd IAT Max', 
    ' Bwd IAT Min',
    'Fwd PSH Flags', 
    ' Bwd PSH Flags', 
    ' Fwd URG Flags', 
    ' Bwd URG Flags', 
    ' Fwd Header Length', 
    ' Bwd Header Length',
    'Fwd Packets/s', 
    ' Bwd Packets/s', 
    ' Min Packet Length', 
    ' Max Packet Length', 
    ' Packet Length Mean', 
    ' Packet Length Std', 
    ' Packet Length Variance',
    'FIN Flag Count', 
    ' SYN Flag Count', 
    ' RST Flag Count', 
    ' PSH Flag Count', 
    ' ACK Flag Count', 
    ' URG Flag Count', 
    ' CWE Flag Count', 
    ' ECE Flag Count', 
    ' Down/Up Ratio', 
    ' Average Packet Size', 
    ' Avg Fwd Segment Size', 
    ' Avg Bwd Segment Size', 
    ' Fwd Header Length',
    'Fwd Avg Bytes/Bulk', 
    ' Fwd Avg Packets/Bulk', 
    ' Fwd Avg Bulk Rate', 
    ' Bwd Avg Bytes/Bulk', 
    ' Bwd Avg Packets/Bulk',
    'Bwd Avg Bulk Rate',
    'Subflow Fwd Packets', 
    ' Subflow Fwd Bytes', 
    ' Subflow Bwd Packets', 
    ' Subflow Bwd Bytes',
    'Init_Win_bytes_forward', 
    ' Init_Win_bytes_backward', 
    ' act_data_pkt_fwd',
    ' min_seg_size_forward',
    'Active Mean', 
    ' Active Std', 
    ' Active Max', 
    ' Active Min',
    'Idle Mean', 
    ' Idle Std', 
    ' Idle Max', 
    ' Idle Min']


@app.route('/')
def Index():
    return "AIDefenceNet api V1.0.0 by AIDefenceNet Team (Hakuna Matata) for Smart India Hackathon 2023 is up and running!"

class UploadFileForm(FlaskForm):
    file = FileField("File", validators=[InputRequired()])
    submit = SubmitField("Upload File")

@app.route('/home', methods=["POST"])
def home():
    if request.method == 'POST':
      file = request.files.get('file') 
      # form = UploadFileForm()
      if file:
          global file1
          # file = form.file.data # First grab the file
          file.save(os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(file.filename)))
          file1 = file.filename
    return redirect('/Predicted')
    # return render_template('index.html', form=form)

@app.route('/Predicted')
def Predicted_Page():
    csv1 = pd.read_csv(root1+'\\'+file1)
    csv1.dropna(inplace=True)
    source_ip = csv1['Source IP']
    destination_ip = csv1[' Destination IP']
    protocol = csv1[' Protocol']
    port = csv1[' Destination Port']
    timestamp = csv1[' Timestamp']
    csv1 = csv1[selected_features]
    scaler = StandardScaler()
    X = scaler.fit_transform(csv1)
    Predict = model.predict(X)
    print(Predict)
    print(Predict.shape)
    print(np.unique(Predict, return_counts=True))
    return jsonify({'Source IPs': source_ip.tolist(), 
                    'Destination IPs': destination_ip.tolist(), 
                    'Protocols': protocol.tolist(), 
                    'Ports': port.tolist(), 
                    'Timestamps': timestamp.tolist(),
                    'Predictions': Predict.tolist()})


@app.route('/ddos=<string:features>')
def Predicted_ddos(features):
    print(features)
    features = features.split(',')
    features = np.array(features).reshape(1,-1)
    Predict = model.predict(features)
    for i in Predict:
        if i==0:
            return "Normal"
        else:
            return "DDoS"
    

if __name__=='__main__':
    app.run(debug=True)
