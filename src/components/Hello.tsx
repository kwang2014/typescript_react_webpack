import * as React from "react";
export interface HelloProps{
    compiler:string;
    framework:string;
    date:Date;
}

export class Hello extends React.Component<HelloProps,{}>{
    render(){
        return <div>
                    <h1>Hello from {this.props.compiler} and {this.props.framework} at : {this.props.date.toTimeString()}
                    </h1>
                    <input type="button" value={this.props.compiler} disabled={true}/>
                </div>
    }
}