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
    const url = "https://fakestoreapi.com/products";

    const response = await axios(url);
   // console.warn( response," Responses");
    const data = await  response.data;
    console.warn(data);

    this.setState({
      loading: false,
      person: data
      //person: null
    });
  }
  

  render() {
    if(this.state.loading)
    {
return <div>loadding---------</div>



    }
    if(!this.state.person)
    {
return <div>this person is not availval</div>


    }
 
   
    return (
  

      <div>
        {this.state.person.map(person=>
     <div key={person.id}>
        <div>{person.title}</div>
        <div>{person.price}</div>
        <div>{this.category}</div>
        <div>
          <img src={person.image} width="500px"></img>
        </div>
        </div>
        )}
      </div>
  
      
       );
    
  }
  
}