import os
from wtforms.validators import InputRequired
from flask_wtf import FlaskForm
from wtforms import FileField, SubmitField
from sklearn.preprocessing import StandardScaler
from pickle import load

import numpy as np
import pandas as pd

model = load(open('model_svm.sav', 'rb'))
selected_features = [
    'Flow Duration', 
    'Tot Fwd Pkts',
    'Tot Bwd Pkts',
    'TotLen Fwd Pkts',
    'TotLen Bwd Pkts',
    'Fwd Pkt Len Max',
    'Fwd Pkt Len Min',
    'Fwd Pkt Len Mean',
    'Fwd Pkt Len Std',
    'Bwd Pkt Len Max',
    'Bwd Pkt Len Min',
    'Bwd Pkt Len Mean',
    'Bwd Pkt Len Std',
    # Flow Bytes/s, Flow Packets/s, 
    'Flow IAT Mean', 
    'Flow IAT Std', 
    'Flow IAT Max', 
    'Flow IAT Min',
    'Fwd IAT Tot', 
    'Fwd IAT Mean', 
    'Fwd IAT Std', 
    'Fwd IAT Max', 
    'Fwd IAT Min',
    'Bwd IAT Tot', 
    'Bwd IAT Mean', 
    'Bwd IAT Std', 
    'Bwd IAT Max', 
    'Bwd IAT Min',
    'Fwd PSH Flags', 
    'Bwd PSH Flags', 
    'Fwd URG Flags', 
    'Bwd URG Flags', 
    'Fwd Header Len', 
    'Bwd Header Len',
    'Fwd Pkts/s', 
    'Bwd Pkts/s', 
    'Pkt Len Min',
    'Pkt Len Max',
    'Pkt Len Mean',
    'Pkt Len Std',
    'Pkt Len Var',
    'FIN Flag Cnt',
    'SYN Flag Cnt',
    'RST Flag Cnt',
    'PSH Flag Cnt',
    'ACK Flag Cnt',
    'URG Flag Cnt', 
    'CWE Flag Count', 
    'ECE Flag Cnt', 
    'Down/Up Ratio',
    'Pkt Size Avg',
    'Fwd Seg Size Avg',
    'Bwd Seg Size Avg',
    #'Fwd Header Len', # Issues with this column
    'Fwd Byts/b Avg',
    'Fwd Pkts/b Avg',
    'Fwd Blk Rate Avg',
    'Bwd Byts/b Avg',
    'Bwd Pkts/b Avg',
    'Bwd Blk Rate Avg',
    'Subflow Fwd Pkts',
    'Subflow Fwd Byts',
    'Subflow Bwd Pkts',
    'Subflow Bwd Byts',
    'Init Fwd Win Byts',
    'Init Bwd Win Byts',
    'Fwd Act Data Pkts',
    'Fwd Seg Size Min',
    'Active Mean', 
    'Active Std', 
    'Active Max', 
    'Active Min',
    'Idle Mean', 
    'Idle Std', 
    'Idle Max', 
    'Idle Min'
]


def Predicted_Page(file):
    csv1 = pd.read_csv(file)
    csv1.dropna(inplace=True)
    source_ip = csv1['Src IP']
    destination_ip = csv1['Dst IP']
    protocol = csv1['Protocol']
    port = csv1['Dst Port']
    timestamp = csv1['Timestamp']
    csv1 = csv1[selected_features]
    scaler = StandardScaler()
    X = scaler.fit_transform(csv1)
    Predict = model.predict(X)
    print(Predict)
    print(Predict.shape)
    print(np.unique(Predict, return_counts=True))
    data = [{'Source IPs': source_ip.tolist(), 
                    'Destination IPs': destination_ip.tolist(), 
                    'Protocols': protocol.tolist(), 
                    'Ports': port.tolist(), 
                    'Timestamps': timestamp.tolist(),
                    'Predictions': Predict.tolist()}]
    
    # Convert to the desired format
    formatted_data = {"predictions": []}

    for i in range(len(data[0]['Source IPs'])):
        prediction = {
            "destination_ip": data[0]['Destination IPs'][i],
            "sourceip": data[0]['Source IPs'][i],
            "protocol": data[0]['Protocols'][i],
            "port": data[0]['Ports'][i],
            "timestamps": data[0]['Timestamps'][i],
            "predicted value": data[0]['Predictions'][i]
        }
        formatted_data["predictions"].append(prediction)

    # Print the formatted data
    print(formatted_data)
    return formatted_data