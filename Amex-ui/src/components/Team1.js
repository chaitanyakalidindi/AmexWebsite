import React, { PureComponent } from 'react'

import usa from "./data/usa.jpg"
import ind from "./data/ind.jpg"
import uk from "./data/uk.jpg"
import uae from "./data/uae.jpg"
import russia from "./data/russia.jpg"
import aus from "./data/aus.jpg"

class Team extends React.Component {
    state={
        click:0,
        server:[{
              "id":"1",
              "name":"bnm",
              "location":"NYC",
              "memory": 250,
              "cpu_count":10,
              "storage":100              
          },
          {
              "id":"2",
              "name":"iop",
              "location":"NYC",
              "memory": 250,
              "cpu_count":10,
              "storage":100              
          },
          {
              "id":"3",
              "name":"asd",
              "location":"NYC",
              "memory": 250,
              "cpu_count":10,
              "storage":100              
          }],
        location:[{
          "id":1,
          "country":"USA",
          "location_count":50,
          "server_count": 250,
          "server_free":10,
          "location_code":100,
          Photo:usa ,  
          "bio":"America host our bigest and our best servers. America host our bigest and our best servers. America host our bigest and our best servers.America host our bigest and our best servers.America host our bigest and our best servers.America host our bigest and our best servers.America host our bigest and our best servers.America host our bigest and our best servers"             
        
      },{
      
      "id":2,
      "country":"AUSTRALIA",
      "location_count":100,
      "server_count": 250,
      "server_free":10,
      "location_code":100,
      Photo:aus , 
      "bio":"australia has a significant amount of servers.australia has a significant amount of servers.australia has a significant amount of servers.australia has a significant amount of servers.australia has a significant amount of servers.australia has a significant amount of servers.australia has a significant amount of servers.australia has a significant amount of servers.australia has a significant amount of servers.australia has a significant amount of servers."
       },
      {
        "id":3,
        "country":"INDIA",
        "location_count":150,
        "location":"NYC",
        "server_count": 250,
        "server_free":10,
        "location_code":100 ,
        Photo:ind,  
        "bio": "India has the most customer base.ndia has the most customer base.ndia has the most customer base.ndia has the most customer base.ndia has the most customer base.ndia has the most customer base.ndia has the most customer base.ndia has the most customer base"           
    },{
      "id":4,
      "country":"UNITED KINGDOM",
      "location_count":90,
      "location":"NYC",
      "server_count": 250,
      "server_free":10,
      "location_code":100,
      Photo:uk ,
      "bio":"UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular.UK is the most popular."
  },{
    "id":5,
    "country":"UAE",
    "location_count":80,
    "location":"NYC",
    "server_count": 250,
    "server_free":10,
    "location_code":100 ,
    Photo:uae,
    "bio":"UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue.UAE gives us the most revenue."             
},{
  "id":6,
  "country":"RUSSIA",
  "location_count":10,
  "location":"NYC",
  "server_count": 250,
  "server_free":10,
  "location_code":100 ,
  Photo:russia,
  "bio":".Russia is our smallest base.Russia is our smallest base.Russia is our smallest base.Russia is our smallest base.Russia is our smallest base.vRussia is our smallest base.Russia is our smallest base.Russia is our smallest base.Russia is our smallest base.Russia is our smallest base.Russia is our smallest base.Russia is our smallest base.vRussia is our smallest base.vRussia is our smallest base.vRussia is our smallest base.Russia is our smallest base."

}]


    }
    renderServer=(server)=>{
     
      return <tr>
      <th scope="row">1</th>
      <td className="table-warning">{server.name}</td>
      <td className="table-primary">{server.id}</td>
      <td className="table-primary">{server.memory}</td>
      <td className="table-primary">{server.cpu_count}</td>
      <td className="table-primary">{server.location}</td>
      <td className="table-primary">{server.storage}</td>
    </tr>
      
    }
    renderMember=(team)=>{
      console.log(team)
      return <div className="card card-flip"><div className="container-fluid">
      <div className="row">
      <div className="col-sm-12">
      <h1 className="text-muted text-center" ><strong><span style={{color:"red"}}>T</span>EAM</strong></h1>    
      </div>
      </div>
      
      <div className="row mx-auto">
      
      <div className="col-sm-3">
        
       <br/>
       
        <img className="img-thumbnail " src = {team.Photo} alt="Card image cap"></img>
        </div>
        <div className="text-left col-sm-9">
        <h2 className="text-left">{team.country}</h2>
          <h3 className="card-text text-left">Location code: {team.location_code}</h3>
          <h3 className="card-text text-left">Location count: {team.location_count}</h3>
          <h3 className="card-text text-left">Server count: {team.server_count}</h3>
          <h3 className="card-text text-left">Servers free: {team.server_free}</h3>
          <br/>
          <h3 className="card-text text-left">Bio:  {team.bio}</h3>
          
        </div>
        </div>
        </div>
        <div className="row ">
      <div className="col-sm-1">
      <button type="button" class="btn btn-primary" onClick={()=>this.toClick(0)}>GO BACK</button>
      </div>
      
      </div>
      </div>

    }
    toServer=()=>{
      return<div className="table-responsive"> <table class="table table-dark">
      <caption>List of users</caption>
      <thead class="thead-dark">
        <tr style={{background:"#487cec"}}>
          <th scope="col"><b>NO</b></th>
          <th scope="col"><b>NAME</b></th>
          <th scope="col"><b>MEMOERY(in TB)</b></th>
          <th scope="col"><b>CPU_COUNT</b></th>
          <th scope="col"><b>LOCATION</b></th>
          <th scope="col"><b>STORAGE</b></th>
        </tr>
      </thead>
      <tbody>
      {this.state.server.map(server=> this.renderServer(server))}
      </tbody>
      </table>
      </div>
      
    }
    toRender=()=>{
        if(this.state.click==1){
            
            const usa=this.state.location.filter(c => c.id===1)
            
            return usa.map(c => this.renderMember(c))
        }
        if(this.state.click==2){
          const india=this.state.location.filter(c => c.id===2)
          
          return india.map(c => this.renderMember(c))
        }
        if(this.state.click==3){
          const australia=this.state.location.filter(c => c.id===3)
          
          return australia.map(c => this.renderMember(c))
        }
        if(this.state.click==4){
          const uk=this.state.location.filter(c => c.id===4)
          
          return uk.map(c => this.renderMember(c))

        }
        if(this.state.click==5){
          const uae=this.state.location.filter(c => c.id===5)
          
          return uae.map(c => this.renderMember(c))

        }
        if(this.state.click==6){
          const russia=this.state.location.filter(c => c.id===6)
          
          return russia.map(c => this.renderMember(c))  

        }
        if(this.state.click==0){

        
        return <div className="front container-fluid bg-grey text-center ">
          
<div className="container-fluid">
<h1 className="text-muted" ><strong><span style={{color:"red"}}>L</span>OCATION'S OF THE SERVERS</strong></h1>    
               </div>
          <div className="row  ">
        
        <div className="col-xs-3">
        <div className="card" >
          <img className="card-img-top img-fluid" src={usa} alt="Card image cap"></img>
          <div className="card-body">
            <h3 className="card-title"><strong>USA</strong></h3>
            <p className="card-text">Location code: us-side-1 </p>
            
            <div className="text-center"><button type="button" class="btn btn-primary" onClick={()=>this.toClick(1)}>View Bio</button></div>
          </div>
          </div>
        </div>
        <div className="col-xs-1"></div>
        <div className="col-xs-3">
        <div className="card" >
          <img className="card-img-top img-fluid" src={ind} alt="Card image cap"></img>
          <div className="card-body">
          <h3 className="card-title"><strong>INDIA</strong></h3>
            <p className="card-text">Location code: in-side-2 </p>
            <div className="text-center"><button type="button" class="btn btn-primary" onClick={()=>this.toClick(3)}>View Bio</button></div>
          </div>
          </div>
        </div>
        <div className="col-xs-1"></div>
        <div className="col-sm-3">
        <div className="card" >
          <img className="card-img-top" src={aus} alt="Card image cap"></img>
          <div className="card-body">
          <h3 className="card-title"><strong>AUSTRALIA</strong></h3>
            <p className="card-text">Location code: aus-side-1 </p>
            <div className="text-center"><button type="button" class="btn btn-primary" onClick={()=>this.toClick(2)}>View Bio</button></div>
          </div>
          </div>
        </div>
        <div className="col-xs-1"></div>
        </div>
        <br/>
        <br/>
        <div className="row  ">
        
        <div className="col-xs-3">
        <div className="card" >
          <img className="card-img-top img-fluid" src={uk} alt="Card image cap"></img>
          <div className="card-body">
            <h3 className="card-title"><strong>UNITED KINGDOM</strong></h3>
            <p className="card-text">Location code: uk-side-1 </p>
            <div className="text-center"><button type="button" class="btn btn-primary" onClick={()=>this.toClick(4)}>View Bio</button></div>
          </div>
          </div>
        </div>
        <div className="col-xs-1"></div>
        <div className="col-xs-3">
        <div className="card" >
          <img className="card-img-top img-fluid" src={uae} alt="Card image cap"></img>
          <div className="card-body">
          <h3 className="card-title"><strong>UAE</strong></h3>
            <p className="card-text">Location code: uae-side-1 </p>
            <div className="text-center"><button type="button" class="btn btn-primary" onClick={()=>this.toClick(5)}>View Bio</button></div>
          </div>
          </div>
        </div>
        <div className="col-xs-1"></div>
        <div className="col-sm-3">
        <div className="card" >
          <img className="card-img-top" src={russia} alt="Card image cap"></img>
          <div className="card-body">
          <h3 className="card-title"><strong>RUSSIA</strong></h3>
            <p className="card-text">Location code: rus-side-1 </p>
            <div className="text-center"><button type="button" class="btn btn-primary" onClick={()=>this.toClick(6)}>View Bio</button></div>
          </div>
          </div>
        </div>
        <div className="col-xs-1"></div>
        </div>  
        </div>}
    }
    toClick=(id)=>{
        const c=1
        const v=0
        if(id===0){
            this.setState({click: 0})
            return
        }
        if(id===1){
            this.setState({click: 1})
            return
        } 
        if(id===2){
            this.setState({click: 2})
            return
        } 
        if(id===3){
            this.setState({click: 3})
            return
        }  
        if(id===4){
            this.setState({click: 4})
            return
        }
        if(id===5){
            this.setState({click: 5})
            return
        }
        if(id===6){
            this.setState({click: 6})
            return
        }
    }
    
    
    render(){ 
        return (<div id="team" className="card-containe bg-grey slideanim"><div className="card-flip">
            <br/>
            {this.toRender()}
           
            </div>
            </div>);

    }
}

 
export default Team;