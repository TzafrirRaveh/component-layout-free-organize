import React from 'react';
import './style/main.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LayoutSelect from "./layouts/LayoutSelect";
import {layouts, layoutSelectPage} from './mocks/layouts';
import {pages} from './mocks/generalMocks';
import ColorComponentToLayout from "./general-component/ColorComponentToLayout";

function App() {
	return (
		<div className="App">
			<Router>
				<main>
					<Switch>
						<Route exact path={'/'}>
							<LayoutSelect layout={layoutSelectPage}/>
						</Route>
						{Array.from(pages).map((page, i) => {
							return (<Route key={i} path={`/${page}`}>
								<ColorComponentToLayout layout={layouts[page]}/>
							</Route>)
						})}
					</Switch>
				</main>
			</Router>
		</div>
	);
}

export default App;
