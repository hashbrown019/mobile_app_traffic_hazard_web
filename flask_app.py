
# A very simple Flask Hello World app for you to get started with...
from flask_cors import CORS,cross_origin
from flask import Flask, render_template,request, jsonify
import json, os

app = Flask(__name__)
app.config["JSONIFY_PRETTYPRINT_REGULAR"] = True
app.secret_key="ahahahah"
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['JSON_SORT_KEYS'] = False

@app.route('/_test_',methods=["POST","GET"])
def index():
    return render_template("home.html",tags = tags_get())

@app.route('/',methods=["POST","GET"])
def admin():
    return render_template("admin.html",tags = tags_get())

def tags_get():
    res = []
    dir_path = "/home/aljeancadaves555/mobile_app_traffic_hazard_web/assets/"
    for path in os.listdir(dir_path):
        if os.path.isfile(os.path.join(dir_path, path)):
            f = open(f"/home/aljeancadaves555/mobile_app_traffic_hazard_web/assets/{path}","r")
            res.append(json.loads(f.read()))
            f.close()
    return(res)

@app.route('/save_ble',methods=["POST","GET"])
def save_ble():
    codes = request.form['f_code']
    f = open(f"/home/aljeancadaves555/mobile_app_traffic_hazard_web/assets/{codes}","w")
    f.write(json.dumps(dict(request.form)))
    return "finished"

@app.route('/del_ble/<code>',methods=["POST","GET"])
def del_ble(code):
    os.remove("/home/aljeancadaves555/mobile_app_traffic_hazard_web/assets/"+code)
    return "finished"

@app.route('/sample',methods=["POST","GET"])
def sample():
    return jsonify(tags_get())
    # heheh



@app.route('/getuser',methods=["POST","GET"])
def getuser():
    
    all_users = {}
    # _file = open(c.JSON_PATH,"r")
    # _data = _file.read()
    for fname in os.listdir(f"/home/aljeancadaves555/mobile_app_traffic_hazard_web/users"):
        _file = open(c.JSON_PATH+fname,"r")
        _data = json.loads(_file.read())
        all_users[fname] = _data
    return jsonify(all_users)

@app.route('/login',methods=["POST","GET"])
def login():
    
    all_users = {}
    # _file = open(c.JSON_PATH,"r")
    # _data = _file.read()
    for fname in os.listdir(f"/home/aljeancadaves555/mobile_app_traffic_hazard_web/users"):
        _file = open("/home/aljeancadaves555/mobile_app_traffic_hazard_web/users/"+fname,"r")
        _data = (_file.read())
        all_users[fname] = _data
    return jsonify(all_users)

@app.route('/register',methods=["POST","GET"])
def register():
    
    fILE = request.form['uname']+"_"+request.form['pswd']
    f = open(f"/home/aljeancadaves555/mobile_app_traffic_hazard_web/users/{fILE}","w")
    f.write('{"name" : "'+request.form['name']+'", "uname" : "'+request.form['uname']+'","pswd" : "'+request.form['pswd']+'", "num" : "'+request.form['num']+'"}')
    return "finished"




for_server = "/home/aljeancadaves555/mobile_app_traffic_hazard_web/"