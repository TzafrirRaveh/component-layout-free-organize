import React from "react";
import Layout from "./Layout";
import {breakPoints, cols, layouts} from '../mocks/layouts'
import {Link} from "react-router-dom";
import {Responsive as ResponsiveGridLayout} from 'react-grid-layout';

export default function LayoutSelect({layout}) {
	const documentWidth = document.body.offsetWidth;
	return (
		<ResponsiveGridLayout
			className="layout"
			breakpoints={breakPoints}
			cols={cols}
			layouts={layout}
			width={documentWidth}
		>
			{Object.keys(layouts).map((layoutToShow, i) => {
				return (
					<Link key={layout.l[i].i} to={`/${layoutToShow}`}>
						<section className={'section-container'}>
							<Layout layout={layouts[layoutToShow]}/>
						</section>
					</Link>
				)
			})}
		</ResponsiveGridLayout>
	)
}