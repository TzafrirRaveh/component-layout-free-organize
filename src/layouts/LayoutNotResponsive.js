import React from "react";
import GeneralColor from "../general-component/general-color";
import GridLayout from 'react-grid-layout';
import {colors} from "../mocks/generalMocks";

export default function LayoutNotResponsive({layout}) {
	return (
		<GridLayout
			className="layout"
			layout={layout}
			cols={12}
			width={1200}
		>
			{Array.from(layout).map((section,i) => {
				console.log(section)
				console.log(i)
				return (<section className={'section-container'} key={section.i}>
					<GeneralColor color={colors[i]} i={i}>1</GeneralColor>
				</section>)
			})}
		
		</GridLayout>
	)
}