import React from "react";
import store from "../redux/reducer/reducer";
import {free_color} from "../redux/action/action";

function GeneralColor({color, i, disableClick}) {
	return (<div
		onClick={() => !disableClick && store.dispatch(free_color(color))}
		className={'color-component__color'}
		style={{backgroundColor:color}}>some general component no {i}</div>)
}

export default GeneralColor;