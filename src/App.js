import React from 'react';
import './style/main.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LayoutSelect from "./layouts/LayoutSelect";
import {layoutSelectPage} from './mocks/layouts';
import {pages} from './mocks/generalMocks';
import ColorComponentToLayout from "./general-component/ColorComponentToLayout";
import store from "./redux/reducer/reducer";
import {Provider} from "react-redux";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<main>
						<Switch>
							<Route exact path={'/'}>
								<LayoutSelect layout={layoutSelectPage}/>
							</Route>
							{Array.from(pages).map((page, i) => {
								return (<Route key={i} path={`/${page}`}>
									<ColorComponentToLayout page={page}/>
								</Route>)
							})}
						</Switch>
					</main>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
