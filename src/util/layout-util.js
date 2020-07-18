import React from "react";
import GeneralColor from "../general-component/general-color";

function isColorPlaceHolderNeeded(page, colors, sectionIndex, isClickable) {
	for (let color in colors) {
		if (colors[color] !== 'free' &&
			colors[color][0] === page &&
			colors[color][1] === sectionIndex) {
			return <GeneralColor color={color} isClickable={isClickable}/>
		}
	}
	return null;
}

export {isColorPlaceHolderNeeded};