import React from "react";
import GeneralColor from "../general-component/general-color";
import {breakPoints, cols} from "../mocks/layouts";
import {Responsive, WidthProvider} from 'react-grid-layout';
import {colors} from "../mocks/generalMocks";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Layout({layout}) {
	const documentWidth = document.body.offsetWidth;
	return (
		<ResponsiveReactGridLayout
			className="layout"
			layouts={layout}
			breakpoints={breakPoints}
			cols={cols}
			width={1200}
		>
			{Array.from(Object.values(layout)[0]).map((section,i) => {
				return (<section className={'section-container'} key={section.i}>
					<GeneralColor color={colors[i]} i={i}>1</GeneralColor>
				</section>)
			})}
			
		</ResponsiveReactGridLayout>
	)
}