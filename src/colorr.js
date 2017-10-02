import React from 'react';
import ReactDOM from 'react-dom';


export class App extends Component {
    consttructor(props){
        super(props);
        this.state ={
            color: "gray"           
        };
    }
Colorchange(){
    if(this.state.color === "gray"){
        this.setState({
            color:"yellow"
        });
    }else {
        this.setState({
            color: "red"
        });
    }
}
render(){
    const styleObj={
        backgroundColor:this.state.color
    }
return{
    
   
};
}

}
ReactDOM.render(<App />, document.getElementByClass('colors'));
registerServiceWorker();