// props
import React, { Component } from "react";
class Props extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <button onClick={() => {this.props.BtnClicked()} }>Click Me</button>
            </div>
        )

    }
}
export default Props;