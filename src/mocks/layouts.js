export const breakPoints = {lg: 1200, md: 768, xxs: 0};
export const cols = {lg: 12, md: 6, xxs: 2};

export const layouts = {
	'100_50_50': {
		lg: [
			{i: 'a', x: 0, y: 0, w: 12, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 6, h: 2, static: true},
			{i: 'c', x: 6, y: 2, w: 6, h: 2, static: true}
		],
		md: [
			{i: 'a', x: 0, y: 0, w: 6, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 3, h: 2, static: true},
			{i: 'c', x: 3, y: 2, w: 3, h: 2, static: true}
		],
		xxs: [
			{i: 'a', x: 0, y: 0, w: 2, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 2, h: 2, static: true},
			{i: 'c', x: 0, y: 2, w: 2, h: 2, static: true}
		]
	},
	'100_100_100': [
		{i: 'a', x: 0, y: 0, w: 12, h: 2, static: true},
		{i: 'b', x: 0, y: 2, w: 12, h: 2, static: true},
		{i: 'c', x: 0, y: 4, w: 12, h: 2, static: true}
	],
}

export const layoutSelectPage = {
	lg: [
		{i: 'a', x: 0, y: 0, w: 6, h: 5, static: true},
		{i: 'b', x: 6, y: 0, w: 6, h: 5, static: true}
	],
	md: [
		{i: 'a', x: 0, y: 0, w: 3, h: 5, static: true},
		{i: 'b', x: 3, y: 0, w: 3, h: 5, static: true}
	],
	xxs: [
		{i: 'a', x: 0, y: 0, w: 2, h: 5, static: true},
		{i: 'b', x: 0, y: 0, w: 2, h: 5, static: true}
	]
}

export const colors = ['red', 'green', 'blue', 'orange']