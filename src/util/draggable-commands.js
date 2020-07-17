import store from "../redux/reducer/reducer";
import {catch_color} from "../redux/action/action";

const dragCommands = {
	colorActive: undefined,
	
	dragStart: function(el, color) {
		this.colorActive = color;
	},
	dropHandle: function(el, sectionIndex, page) {
		
		// first check that the section is empty of color
		let currentState = store.getState();
		for(let color in currentState.colors) {
			if(color !== this.colorActive &&
				currentState.colors[color][0] === page &&
				currentState.colors[color][1] === sectionIndex
			){
				return false;
			}
		}
		// then update state for new color in position
		store.dispatch(catch_color(this.colorActive, page, sectionIndex));
	},
	dragOverHandle: function (el) {
		el.preventDefault();
		// console.log('over',el)
	}
}

export default dragCommands;