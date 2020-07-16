import React from 'react';
import './App.css';
import './style/main.scss';
import GeneralColor from "./general-component/general-color";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Layout from "./layouts/Layout";
import LayoutSelect from "./layouts/LayoutSelect";
import {layouts, layoutSelectPage} from './mocks/layouts';
import {pages} from './mocks/pages';


function App() {
	return (
		<div className="App">
			<Router>
				<nav>
					{Array.from(pages).map((page,i) => <Link key={i} to={`/${page}`}>{page}</Link>)}
				</nav>
				<main>
					<Switch>
						<Route exact path={'/'}>
							<LayoutSelect layout={layoutSelectPage}/>
						</Route>
						{Array.from(pages).map((page, i) => {
							return (<Route key={i} path={`/${page}`}>
								<Layout layout={layouts[page]}/>
							</Route>)
						})}
					</Switch>
				</main>
			</Router>
		</div>
	);
}

export default App;
