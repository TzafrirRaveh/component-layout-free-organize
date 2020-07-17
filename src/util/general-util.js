import React from "react";
import GeneralColor from "../general-component/general-color";

function isColorPlaceHolderNeeded(page, colors, sectionIndex, disableClick) {
	for (let color in colors) {
		if (colors[color] !== 'free' &&
			colors[color][0] === page &&
			colors[color][1] === sectionIndex) {
			return <GeneralColor color={color} disableClick={disableClick}/>
		}
	}
	return null;
}


export {isColorPlaceHolderNeeded};