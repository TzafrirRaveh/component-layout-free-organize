import React from "react";

function GeneralColor({color}) {
	return (<div style={{backgroundColor:color}}>some general component no {Math.floor(Math.random()*100)}</div>)
}

export default GeneralColor;