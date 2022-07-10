import axios from "axios";
import React, { Component } from "react";

export default class Random extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      person: null,
    };
  }
  async componentDidMount() {
    const url = "https://randomuser.me/api/";

    const Responses = await axios(url);
    console.warn(Responses,"Responses");
    const Res = await Responses.data;
    console.warn(Res.results[0]);

    this.setState({
      loading: false,
      person: Res.results[0],
      //person: null
    });
  }
  render() {
    if(this.state.loading)
    {
return <div>loadding---------</div>



    }
    if(this.state.person)
    {
return <div>this person is not availval</div>


    }
 
   
    return (
  

      <div>
     
        <div>{this.state.person.email}</div>
        <div>{this.state.person.id.name}</div>
        <div>
          <img src={this.state.person.picture.large} width="100px"></img>
        </div>
        <div>
          <img src={this.state.person.picture.large}></img>
        </div>
   
      </div>
  
      
       );
    
  }
  
}