from flask import Flask,request
import json
app=Flask(__name__)
class dataload:
    def __init__(self):
        self.data=[
            {
                "id":"1",
                "name":"us-nyc-1",
                "location":"NYC",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"2",
                "name":"us-nyc-2",
                "location":"NYC",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"3",
                "name":"us-nyc-3",
                "location":"NYC",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },{
                "id":"1",
                "name":"us-aus-1",
                "location":"NYC",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"2",
                "name":"us-aus-2",
                "location":"NYC",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"3",
                "name":"us-aus-3",
                "location":"NYC",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "name":"aus-mal-99",
                "location":"Malborn",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"5",
                "name":"aus-mal-9",
                "location":"Malborn",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "name":"aus-mal-4",
                "location":"malborn",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"7",
               "name":"aus-mal-1",
                "location":"Malborn",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"8",
                "name":"aus-mal-2",
                "location":"Malborn",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"9",
                "name":"ind-mub-5",
                "location":"mumbai",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"10",
                "name":"ind-nyc-1",
                "location":"mumbai",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"11",
                "name":"ind-nyc-2",
                "location":"mumbai",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },
            {
                "id":"12",
                "name":"ind-mub-4",
                "location":"mumbai",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            },{
                "id":"13",
                "name":"ind-mub-3",
                "location":"mumbai",
                "memory": 250,
                "cpu_count":10,
                "storage":100              
            }

        ]
@app.route("/")
def get_home():
    d=dataload()
    response={}
    response = app.response_class(response=json.dumps(d.data), status=200, mimetype='application/json')
    return response
    
    
      

    
@app.route("/server/name")
def get_server_by_name():
        d=dataload()
        name=request.args.get('name')
        ans=[]
        for server in d.data:
            if(server["name"]==name):
                ans.append(server)
        response = app.response_class(response=json.dumps(ans), status=200, mimetype='application/json')
        return response
@app.route("/server/id")
def get_server_by_id():
        d=dataload()
        id=request.args.get('id')
        ans=[]
        for server in d.data:
            if(server["id"]==id):
                ans.append(server)
        response = app.response_class(response=json.dumps(ans), status=200, mimetype='application/json')
        return response

if __name__=="__main__":
    app.run(debug=True)
    db=dataload()

