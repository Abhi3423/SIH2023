from flask import Flask,request,jsonify
from pkt_snif_new import run

app = Flask(__name__)

@app.route('/')
def index():
    return "AIDefenceNet api V1.0.0 by AIDefenceNet Team (Hakuna Matata) for Smart India Hackathon 2023 is up and running!"

@app.route('/realtime/<string:token>')
def realtime(token):
    if request.method == "POST":
        duration = request.get_json()
        
        result_csv = run(token, duration)
        
        
        
        

if __name__ == '__main__':
    app.run()
