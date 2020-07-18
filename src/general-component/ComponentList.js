import React from "react";
import GeneralColor from "./general-color";
import dragCommands from "../util/draggable-commands";
import {connect} from "react-redux";

function ComponentList({colors}) {
	return (
		<ul>
			{Object.keys(colors).map((color, i) => {
				if (colors[color] !== 'free') {
					const positionOf = colors[color];
					return <li className={'color-component__empty'} key={i}>The color {color} is in the position of {positionOf[0]} for section {positionOf[1]}</li>
				} else {
					return (<li
						onDragStart={e => dragCommands.dragStart(e, color)}
						draggable={true}
						className={'color-component__item'}
						key={i}>
						<GeneralColor color={color}/>
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