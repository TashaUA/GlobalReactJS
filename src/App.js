import "./styles.scss";
import React from 'react';
import FilmsList from "./components/FilmsList";
import Footer from "./components/Footer";
import ReactDOM from "react-dom";

export default function App() {

    const header = React.createElement("h1", null, "My first reactJS app");
    ReactDOM.render(header, document.querySelector("header"));

    return (
        <div className="App">
            <h1>Hello World</h1>
            <FilmsList/>
            <Footer/>
        </div>
    );
}
