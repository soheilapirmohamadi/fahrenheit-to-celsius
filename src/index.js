import React from 'react';
import { render } from 'react-dom';
import Farens from './Farens';
import styles from './Stylem.css';
import *as  MyFunc from './TryCovert';

class S extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: "c",
      temp: '',
    }
  }
  handelchangeCelsius  = (temp) => {
    this.setState({
      scale: "c",
      temp: temp
    })
  }
  handelchangeFahrenheit = (temp) => {
    this.setState({
      scale: "f",
      temp: temp
    })
  }
  render() {
    const Celsius  = this.state.scale == "f" ? MyFunc.tryConvert(this.state.temp, MyFunc.toCelsius ) : this.state.temp
    const  Fahrenheit = this.state.scale == "c" ? MyFunc.tryConvert(this.state.temp, MyFunc.toFahrenheit) : this.state.temp

    return (
      <div className="card">
        <h1 id="h1">Celsius to Fahrenheit and vice versa</h1>

        <Farens temprecher={Fahrenheit} type="f" handelchange={this.handelchangeFahrenheit} />

        {<i id="ic" class='fas fa-sync-alt' ></i>}

        <Farens temprecher={Celsius } type="c" handelchange={this.handelchangeCelsius } />
        <br />
        <br />
      </div>
    )
  }
}
render(<S />, document.querySelector("#root"));
