import React from "react";
import {connect} from 'react-redux'
import GridLayout from 'react-grid-layout';
import {isColorPlaceHolderNeeded} from "../util/general-util";

function LayoutNotResponsive({layout, page, colors}) {
	return (
		<GridLayout
			className="layout"
			layout={layout}
			cols={12}
			width={1200}
		>
			{layout.map((section) => {
				return (
					<section
						className={'section-container'}
						key={section.i}>
						{isColorPlaceHolderNeeded(page, colors, section.i, true)}
					</section>
				)
			})}
		
		</GridLayout>
	)
}

const mapStateToProps = state => {
	return {
		colors: state.colors
	}
}

export default connect(mapStateToProps)(LayoutNotResponsive)