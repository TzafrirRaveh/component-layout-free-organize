export const CATCH_COLORS = 'CATCH_COLORS';
export const FREE_COLORS = 'FREE_COLORS';

export function catch_color(color, page, sectionIndex) {
	return {
		type: CATCH_COLORS,
		payload: {
			color,
			page,
			sectionIndex
		}
	}
}

export function free_color(color) {
	return {
		type: FREE_COLORS,
		payload: color
	}
}
