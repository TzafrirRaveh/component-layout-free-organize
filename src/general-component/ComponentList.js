import React from "react";
import {colors} from "../mocks/generalMocks";
import GeneralColor from "./general-color";

export default function ComponentList() {
	return (
		<ul>
			{colors.map((color, i) => {
				return (<li className={'color-component__item'} key={i}>
					<GeneralColor color={color} i={i}/>
				</li>)
			})}
		</ul>
	)
}