import React from "react";
import {breakPoints, cols, layouts} from '../mocks/layouts'
import {Link} from "react-router-dom";
import {Responsive, WidthProvider} from 'react-grid-layout';
import LayoutNotResponsive from "./LayoutNotResponsive";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function LayoutSelect({layout}) {
	const documentWidth = document.body.offsetWidth;
	return (
		<ResponsiveReactGridLayout
			className="layout"
			breakpoints={breakPoints}
			cols={cols}
			layouts={layout}
			width={1200}
			autoSize={false}
			margin={[20,20]}
		>
			{Object.keys(layouts).map((layoutToShow, i) => {
				return (
					<Link key={layout.l[i].i} to={`/${layoutToShow}`}>
						<section className={'section-container section-container__not-responsive'}>
							<LayoutNotResponsive layout={layouts[layoutToShow].l}/>
						</section>
					</Link>
				)
			})}
		</ResponsiveReactGridLayout>
	)
}