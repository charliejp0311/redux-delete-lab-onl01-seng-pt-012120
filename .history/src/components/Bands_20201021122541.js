import { Component } from "react";
import Band from './Band'

class Bands extends Component{

    render(){
        console.log(this)
        return (
            <div>
                <Band />
            </div>
        );
    };
}



export default Bands;