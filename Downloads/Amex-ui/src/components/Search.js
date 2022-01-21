import React, { PureComponent } from 'react'

import environment from './constants/environment';
import {FormControl, Form, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';


class Team extends React.Component {
    state={
        click:"",
        server:[],
        search:""

      


    }
    toSearch=(id)=>{
        this.setState({click: id})

        
    }
    renderServer=(server)=>{
     
        return <tr>
        <th scope="row">1</th>
        <td className="table-warning">{server.name}</td>
        
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
          <h3 className="card-text text-left">Location counrt: {team.location_count}</h3>
          <h3 className="card-text text-left">Server count: {team.server_count}</h3>
          <h3 className="card-text text-left">Servers free: 
          {team.server_free}</h3>
          
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
    handleSearchSubmit = () => {
        if (this.state.search=="") {
          this.getSensorData()
          return
        }
        this.getSensorDataName(this.state.search)
        return
      }
    handleSearchInput = (event) => {
        this.setState({
          search: event.target.value
        });
      };
    toServer=()=>{
      return<div>
        <div className="row">
        
        <Form className="inline">
        <div className="col-xs-2"></div>
        <div className="col-xs-8">
            <FormControl
              onChange={this.handleSearchInput}
              value={this.state.search}
              type="text"
              placeholder="Search by name"
              className="mr-sm-2"
            />
        </div>
       
        <div className="col-xs-2">
          <Button style={{background:"red", color:"black"}} onClick={this.handleSearchSubmit} variant="outline-info">
              Search
         </Button> 
         </div >
          </Form>
        
        </div>
        <br/> 
        <div className="table-responsive"> <table class="table table-dark">
      
      <thead class="thead-dark">
        <tr style={{background:"#487cec", color:"black"}}>
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
      </div>
      
      
    }
    
    getSensorData = () => {
        const sensorDataUrl = environment.apiPath + '/';
        fetch(sensorDataUrl)
          .then((response) => response.json())
          .then((data) => {
            this.setState({server: data})
           
            
            }
            
          );
          console.log(this.state.server)
      }
      getSensorDataName = (sensorName) => {
        const sensorDataUrl = environment.apiPath + '/server/name?name=' + sensorName;
        fetch(sensorDataUrl)
          .then((response) => response.json())
          .then((data) => {
            this.setState({server: data})
           
            
            }
            
          );
          console.log(this.state.server)
      }
      
    toRender=()=>{
        
            return this.toServer()
               
        }
       
    
    toClick=(id)=>{
        const c=1
        const v=0
        if(id==0){
            this.setState({click: 0})
            return
        }
        if(id==1){
            this.setState({click: 1})
            return
        } 
        if(id==2){
            this.setState({click: 2})
            return
        } 
        if(id==3){
            this.setState({click: 3})
            return
        }  
        if(id==4){
            this.setState({click: 4})
            return
        }
        if(id==5){
            this.setState({click: 5})
            return
        }
        if(id==6){
            this.setState({click: 6})
            return
        }
    }
    
    componentDidMount() {
        {this.getSensorData()}
    }
    render(){ 
        
        
        return (<div id="search" className="card-containe slideanim"><div className="card-flip">
            <br/>
            <h1 className="text-muted text-center" ><strong><span style={{color:"red"}}>S</span>ERVER</strong></h1>
            <br/>
            {this.toRender()}
           
            </div>
            </div>);

    }
}

 
export default Team;