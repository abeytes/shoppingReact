import React from 'react';
import ReactDom from 'react-dom';
export class App extends Component {
    constructor(){
        super();
        this.statet = {
            color: "blue"
        };
    }
toggleColor(){
    if(this.state.color === "blue"){
        this.setState({color : "green"});
    }
    else {
        this.setState({color : "yellow"});
    } }
}
 render(){
     const styleObj = { backgroundColor : this.state.color};
     return(
         <section style ={styleObject} id = "firstBlock">
             <h1> onClick ={this.toggleColor.bind {this.state.color} </h2>
             </section>
     )
}


