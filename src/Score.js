import React from "react";

const Score = (props) => {
	return (
    	<p className="text">
      Your Score: {props.c}/{props.q}
    </p>
    );
};

export default Score;