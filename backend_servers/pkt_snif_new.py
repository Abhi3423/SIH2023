import subprocess
import time
from datetime import datetime

from flowmeter import Flowmeter
import pandas as pd

import csv
from scapy.all import *

columns = ['Flow ID', 'Src IP', 'Src Port', 'Dst IP', 'Dst Port', 'Protocol', 'Timestamp',
 'Flow Duration', 'Tot Fwd Pkts', 'Tot Bwd Pkts', 'TotLen Fwd Pkts',
 'TotLen Bwd Pkts', 'Fwd Pkt Len Max', 'Fwd Pkt Len Min', 'Fwd Pkt Len Mean',
 'Fwd Pkt Len Std', 'Bwd Pkt Len Max', 'Bwd Pkt Len Min', 'Bwd Pkt Len Mean',
 'Bwd Pkt Len Std', 'Flow Byts/s', 'Flow Pkts/s', 'Flow IAT Mean',
 'Flow IAT Std', 'Flow IAT Max', 'Flow IAT Min', 'Fwd IAT Tot', 'Fwd IAT Mean',
 'Fwd IAT Std', 'Fwd IAT Max', 'Fwd IAT Min', 'Bwd IAT Tot', 'Bwd IAT Mean',
 'Bwd IAT Std', 'Bwd IAT Max', 'Bwd IAT Min', 'Fwd PSH Flags', 'Bwd PSH Flags',
 'Fwd URG Flags', 'Bwd URG Flags', 'Fwd Header Len', 'Bwd Header Len',
 'Fwd Pkts/s', 'Bwd Pkts/s', 'Pkt Len Min', 'Pkt Len Max', 'Pkt Len Mean',
 'Pkt Len Std', 'Pkt Len Var', 'FIN Flag Cnt', 'SYN Flag Cnt', 'RST Flag Cnt',
 'PSH Flag Cnt', 'ACK Flag Cnt', 'URG Flag Cnt', 'CWE Flag Count',
 'ECE Flag Cnt', 'Down/Up Ratio', 'Pkt Size Avg', 'Fwd Seg Size Avg',
 'Bwd Seg Size Avg', 'Fwd Byts/b Avg', 'Fwd Pkts/b Avg', 'Fwd Blk Rate Avg',
 'Bwd Byts/b Avg', 'Bwd Pkts/b Avg', 'Bwd Blk Rate Avg', 'Subflow Fwd Pkts',
 'Subflow Fwd Byts', 'Subflow Bwd Pkts', 'Subflow Bwd Byts',
 'Init Fwd Win Byts', 'Init Bwd Win Byts', 'Fwd Act Data Pkts',
 'Fwd Seg Size Min', 'Active Mean', 'Active Std', 'Active Max', 'Active Min',
 'Idle Mean', 'Idle Std', 'Idle Max', 'Idle Min', 'Label']

def column_rename(new_column, output_file):
    
    df = pd.read_csv(output_file)

    # Replace all the column headers of the DataFrame with the new_column array
    df.columns = new_column
    
    df['Timestamp'] = pd.to_datetime(datetime.now())
    
    filename = datetime.now().strftime("%Y%m%d-%H%M%S") + "-" + output_file
    
    # Save the dataframe to a csv file
    df.to_csv(filename, index=False)
    
    return filename
    
    
import subprocess

def capture_packets(token, duration):
    """
    Capture network packets for a specified duration and save them to a file.

    Args:
    - token (str): A unique identifier for the packet capture file.
    - duration (str): The duration for which packets should be captured (in seconds).

    Returns:
    - output_file (str): The name of the file where the captured packets are saved.
    """

    # Set the network interface to be used for packet capture
    network_interface = "Wi-Fi"

    # Set the name of the output file where the captured packets will be saved
    output_file = token + "__packet_capture.pcap"
    
    try:
        # Define the tshark command to capture packets and save them to a file
        command = [
            "tshark",
            "-i", network_interface,  # Replace with the appropriate network interface
            "-a", "duration:" + duration,            # Capture packets for the specified duration
            "-w", output_file     # Save captured packets to a file
        ]

        # Run the tshark command
        subprocess.run(command, check=True)

    except subprocess.CalledProcessError as e:
        print(f"Error running tshark: {e}")
        
    return output_file
        
def pcap_to_csv(input_pcap, token):
    
    out_file = token + "__packet_capture.csv"

    feature_gen = Flowmeter(
        offline = input_pcap,
        outfunc = None,
        outfile = out_file)

    feature_gen.run()
    
    return out_file

def run(token, duration=15):
    while True:
        output_file = capture_packets(token , duration)
        print("Captured packets for 5 seconds. Sleeping for 1 minute...")
        out_file = pcap_to_csv(output_file, token)
        filename = column_rename(columns, out_file)
        time.sleep(5)  # Sleep for 60 seconds before capturing again
        return filename
    