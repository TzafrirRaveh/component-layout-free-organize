import {
	CATCH_COLORS,
	FREE_COLORS
} from "../action/action";
import {colors} from "../../mocks/generalMocks";
import {createStore} from "redux";

const initialState = {
	colors: colors
}

const updateColors = (state = initialState, action) => {
	switch (action.type) {
		case FREE_COLORS:
			return {
				...state,
				colors: {...state.colors, [action.payload]:'free'}
			};
		case CATCH_COLORS:
			return {
				...state,
				colors: {...state.colors, [action.payload.color]:[action.payload.page,action.payload.sectionIndex]}
			};
		default:
			return state;
	}
}

const store = createStore(updateColors);

export default store;