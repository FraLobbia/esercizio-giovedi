import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Gallery from "./components/Gallery";
import Article from "./components/Article";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* I want a navbar right here */}
				<CustomNavbar />
				<Routes>
					<Route path="/" element={<Gallery />} />
					<Route path="/article/:articleId" element={<Article />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
