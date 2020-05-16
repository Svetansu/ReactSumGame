import React, { Component } from "react";

class Eval extends Component {

  	constructor(props) {
    	super(props);
      	const arr = this.newQ();
      	this.state = {
        	v1: arr[0],
          	v2:	arr[1],
          	v3:	arr[2],
          	evalSum: arr[3],
        };
    }
  
  	newQ = () => {
    	
      const value1 = Math.floor(Math.random() * 100);
      const value2 = Math.floor(Math.random() * 100);
      const value3 = Math.floor(Math.random() * 100);
      const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
      return [value1, value2, value3, proposedAnswer];
      
    };

	nextState = nArr => {
    
    	this.setState(current => ({
        	v1: nArr[0],
          	v2:	nArr[1],
          	v3: nArr[2],
          	evalSum: nArr[3],
        }));
      
    };

	evalAns(check) {
      const { value1, value2, value3, proposedAnswer } = this.state;
      const corrAnswer = value1 + value2 + value3;

      return (
        (corrAnswer === proposedAnswer && check === 'true') ||
        (corrAnswer !== proposedAnswer && check === 'false')
      );
    }

	handleAns = event => {
    
    	const nArr = this.newQ();
      	this.nextState(nArr);
      	const checkAns = this.evalAns(event.target.name);
      	this.props.handleAns(checkAns);
    
    };


	render() {
    	const {v1,v2,v3,evalSum} = this.state;
    	return (
        	<div>
              <div className="equation">
                  <p className="text">{`${v1} + ${v2} + ${v3} = ${evalSum}`}</p>
              </div>
        	  <button onClick={this.handleAns} name="true">
                True
              </button>
              <button name="false" onClick={this.handleAns}>
                False
              </button>
			</div>
        );
    
    }
  
}

export default Eval;