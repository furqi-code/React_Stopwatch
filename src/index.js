import React_dom from "react-dom/client";
import { App } from "./App.jsx";

const root = React_dom.createRoot(document.querySelector('#root')) ;
root.render(<App />) ;