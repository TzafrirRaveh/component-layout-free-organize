import React from "react";
import {breakPoints, cols, layouts} from "../mocks/layouts";
import {Responsive, WidthProvider} from 'react-grid-layout';
import dragCommands from "../util/draggable-commands";
import {connect} from "react-redux";
import {isColorPlaceHolderNeeded} from "../util/general-util";

const ResponsiveReactGridLayout = WidthProvider(Responsive);


function Layout({page, colors}) {
	return (
		<ResponsiveReactGridLayout
			className="layout"
			layouts={layouts[page]}
			breakpoints={breakPoints}
			cols={cols}
			width={1200}
		>
			{layouts[page].l.map((section, i) => {
				return (<section
					onDragOver={dragCommands.dragOverHandle}
					onDrop={e=>dragCommands.dropHandle(e, section.i, page)}
					data-page={page}
					data-section={section.i}
					className={'section-container'}
					key={section.i}>
					{isColorPlaceHolderNeeded(page, colors, section.i)}
				</section>)
			})}
		
		</ResponsiveReactGridLayout>
	)
}

const mapStateToProps = state => {
	return {
		colors: state.colors
	}
}

export default connect(mapStateToProps)(Layout)