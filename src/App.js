import React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "red" }
    }
    but = () => {
        this.setState({ color: "pink" })
    }
    render() {
        return (
            <div>
                <h1>My Favorite Color is {this.state.color}</h1>

                <button type="button" onClick={this.but}>click</button>
            </div>
        );
    }
}


export default App;
