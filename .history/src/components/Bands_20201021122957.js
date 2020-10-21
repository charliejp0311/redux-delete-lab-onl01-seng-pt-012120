import { Component } from "react";
import Band from './Band'

class Bands extends Component{

    render(){
        return (
            <div>
                {this.props.bands.map(band=>
                    <Band key={band.id} band={band} />
                    
                )}
            </div>
        );
    };
}



export default Bands;