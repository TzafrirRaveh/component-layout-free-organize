import React from "react";

function GeneralColor({color, i}) {
	return (<div className={'color-component__color'} style={{backgroundColor:color}}>some general component no {i}</div>)
}

export default GeneralColor;