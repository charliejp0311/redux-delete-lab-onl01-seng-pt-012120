import { Component } from "react";
import Band from './Band'

class Bands extends Component{

    render(){
        return (
            <div>
                {this.props.bands.map(band=>{
                    return (
                        <div>
                            <Band key={band.id} band={band} />
                            <button onClick={()=>this.props.delete(this.props.text.id)}>DELETE</button>
                        </div>
                    );
                })}
            </div>
        );
    };
}



export default Bands;