import React from "react";
import './App.css';
import * as axios from "axios";




class App extends React.Component {
    state = {
        str: []
    }
    returnGet = () => {
        axios.get('https://venbest-test.herokuapp.com/').then(response =>{
            //let name = response.data.map(u => u)
            let str = response.data;
            this.setState({str: str});
        })
    }

    render(){
        return(
            <div className='app-wrapper'>
                <div>{this.state.str.toString()}</div>
                <button onClick={() => this.returnGet()}>click</button>
            </div>

        )
    }

}

export default App
