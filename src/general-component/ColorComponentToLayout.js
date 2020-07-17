import React from "react";
import Layout from "../layouts/Layout";
import ComponentList from "./ComponentList";

export default function ColorComponentToLayout({layout}) {
	return (
		<article className={'color-layout__container'}>
			<div className={'color-layout__list'}>
				<ComponentList/>
			</div>
			<div className={'color-layout__layout'}>
				<Layout layout={layout}/>
			</div>
		</article>
	)
}