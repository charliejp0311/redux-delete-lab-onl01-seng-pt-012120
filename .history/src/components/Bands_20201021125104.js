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
                            <button onClick={()=>this.props.delete(this.newMethod())}>DELETE</button>
                        </div>
                    )}
                )}
            </div>
        );
    };

    newMethod() {
        return this.props.text.id;
    }
}



export default Bands;