import React from "react";
import {breakPoints, cols, layouts} from "../mocks/layouts";
import {Responsive, WidthProvider} from 'react-grid-layout';
import dragCommands from "../util/draggable-commands";
import {connect} from "react-redux";
import {isColorPlaceHolderNeeded} from "../util/layout-util";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function Layout({page, colors}) {
	return (
		<ResponsiveReactGridLayout
			className="layout"
			layouts={layouts[page]}
			breakpoints={breakPoints}
			cols={cols}
			width={1}
		>
			{layouts[page].l.map((section, i) => {
				return (<section
					onDragOver={dragCommands.dragOverHandle}
					onDrop={e => dragCommands.dropHandle(e, section.i, page)}
					className={'section-container'}
					key={section.i}>
					{isColorPlaceHolderNeeded(page, colors, section.i, true)}
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