import React from "react";
import GeneralColor from "../general-component/general-color";
import randomColor from '../util/general-util';
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import {breakPoints, cols} from "../mocks/layouts";

export default function Layout({layout}) {
	const documentWidth = document.body.offsetWidth;
	return (
		<ResponsiveGridLayout
			className="layout"
			layouts={layout}
			breakpoints={breakPoints}
			cols={cols}
			width={documentWidth}
		>
			{Array.from(Object.values(layout)[0]).map(section => {
				return (<section className={'section-container'} key={section.i}>
					<GeneralColor color={randomColor()}>1</GeneralColor>
				</section>)
			})}
			
		</ResponsiveGridLayout>
	)
}