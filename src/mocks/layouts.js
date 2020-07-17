export const breakPoints = {l: 1000, m: 768, s: 0};
export const cols = {l: 12, m: 6, s: 2};

export const layouts = {
	'100_50_50': {
		l: [
			{i: 'a', x: 0, y: 0, w: 12, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 6, h: 2, static: true},
			{i: 'c', x: 6, y: 2, w: 6, h: 2, static: true}
		],
		m: [
			{i: 'a', x: 0, y: 0, w: 6, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 3, h: 2, static: true},
			{i: 'c', x: 3, y: 2, w: 3, h: 2, static: true}
		],
		s: [
			{i: 'a', x: 0, y: 0, w: 2, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 2, h: 2, static: true},
			{i: 'c', x: 0, y: 4, w: 2, h: 2, static: true}
		],
	},
	'100_100_100': {
		l: [
			{i: 'a', x: 0, y: 0, w: 12, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 12, h: 2, static: true},
			{i: 'c', x: 0, y: 4, w: 12, h: 2, static: true}
		],
		m: [
			{i: 'a', x: 0, y: 0, w: 12, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 12, h: 2, static: true},
			{i: 'c', x: 0, y: 4, w: 12, h: 2, static: true}
		],
		s: [
			{i: 'a', x: 0, y: 0, w: 12, h: 2, static: true},
			{i: 'b', x: 0, y: 2, w: 12, h: 2, static: true},
			{i: 'c', x: 0, y: 4, w: 12, h: 2, static: true}
		]
	},
}

export const layoutSelectPage = {
	l: [
		{i: 'a', x: 0, y: 0, w: 6, h: 4, static: true},
		{i: 'b', x: 6, y: 0, w: 6, h: 4, static: true}
	],
	m: [
		{i: 'a', x: 0, y: 0, w: 3, h: 4, static: true},
		{i: 'b', x: 3, y: 0, w: 3, h: 4, static: true}
	],
	s: [
		{i: 'a', x: 0, y: 0, w: 2, h: 4, static: true},
		{i: 'b', x: 0, y: 4, w: 2, h: 4, static: true}
	]
}