import React from "react";
import {breakPoints, cols, layouts} from '../mocks/layouts'
import {Link} from "react-router-dom";
import {Responsive, WidthProvider} from 'react-grid-layout';
import LayoutNotResponsive from "./LayoutNotResponsive";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function LayoutSelect({layout}) {
	return (
		<ResponsiveReactGridLayout
			className="layout layout_no-border"
			breakpoints={breakPoints}
			cols={cols}
			layouts={layout}
			width={1}
			autoSize={false}
			margin={[20, 20]}
			padding={[20, 20]}
		>
			{Object.keys(layouts).map((layoutName, i) => {
				return (
					<Link key={layout.l[i].i} to={`/${layoutName}`}>
						<section className={'section-container section-container__not-responsive'}>
							<LayoutNotResponsive page={layoutName} layout={layouts[layoutName].l}/>
						</section>
					</Link>
				)
			})}
		</ResponsiveReactGridLayout>
	)
}