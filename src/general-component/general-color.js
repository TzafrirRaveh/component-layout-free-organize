import React from "react";
import store from "../redux/reducer/reducer";
import {free_color} from "../redux/action/action";

function GeneralColor({color, isClickable}) {
	return (<div
		onClick={() => isClickable && store.dispatch(free_color(color))}
		className={'color-component__color'}
		style={{backgroundColor: color}}>Some general component</div>)
}

export default GeneralColor;