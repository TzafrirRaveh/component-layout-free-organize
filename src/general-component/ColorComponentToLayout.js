import React from "react";
import Layout from "../layouts/Layout";
import ComponentList from "./ComponentList";

export default function ColorComponentToLayout({page}) {
	return (
		<div>
			<h1 className={'title'}>Drag the color to the wanted section or click the section to retrieve the color</h1>
			<article className={'color-layout__container'}>
				<div className={'color-layout__list'}>
					<ComponentList/>
				</div>
				<div className={'color-layout__layout'}>
					<Layout page={page}/>
				</div>
			</article>
		</div>
	)
}