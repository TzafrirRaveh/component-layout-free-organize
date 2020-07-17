import React from "react";
import GeneralColor from "./general-color";
import dragCommands from "../util/draggable-commands";
import {connect} from "react-redux";

function ComponentList({colors, free_color}) {
	return (
		<ul>
			{Object.keys(colors).map((color, i) => {
				if(colors[color] !== 'free') {
					const positionOf = colors[color];
					return <li key={i}> the color {color} is in the position of {positionOf[0]} for section {positionOf[1]}</li>
				} else {
					return (<li
						data-color={color}
						onDragStart={e=>dragCommands.dragStart(e, color)}
						draggable={true}
						className={'color-component__item'}
						key={i}>
						<GeneralColor color={color} i={i}/>
					</li>)
				}
			})}
		</ul>
	)
}

const mapStateToProps = state => {
	return {
		colors: state.colors
	}
}

export default connect(mapStateToProps)(ComponentList);