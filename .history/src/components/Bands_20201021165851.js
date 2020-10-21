import React, { Component } from "react";
import Band from './Band';

export default class Bands extends Component{
    render(){
        const bands = this.props.bands.map(band=>{
            return(
                <li><Band key={band.id} band={band} deleteBand={this.props.deleteBand}/></li>
            )
        })
        return (
            <div>
                {bands}
            </div>
        );
    }
}