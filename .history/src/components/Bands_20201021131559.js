import { Component } from "react";
import Band from './Band';

export default class Bands extends Component{
    render(){
        const bands = this.props.bands.map(band=><Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>)
        return (
            <div>
                {this.props.bands.map((band) => {
                    return (
                        <div>
                            {...bands}
                        </div>
                    );
                })}
            </div>
        );
    }
}