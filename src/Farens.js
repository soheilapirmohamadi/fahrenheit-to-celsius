import React  from "react";
const scales ={
  f:"Fahrenheit",
  c:"Celsius"
}
class Farens extends React.Component{
    constructor(props) {
        super(props);
      }
    handelchange=(event)=>{
this.props.handelchange(event.target.value);
    }
      render() {
        return (
          <div id="faren">
            <label  id="lab">{scales[this.props.type]}:</label>
            <div style={{display:"flex",justifyContent:"center"}}>
            <input id="in" value={this.props.temprecher} onChange={this.handelchange} type="text"/>
            </div>
          </div >
        );
      }  
}
    

export default Farens;