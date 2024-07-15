import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

/* note that the react.render is depreacted and we are using createRoot instead.
   The following is the old way of rendering the app.

   ReactDOM.render(<App />, document.getElementById("root"));
*/

// Find the root element where you want to render your app
const rootElement = document.getElementById("root");

// Create a root
const root = createRoot(rootElement);

// Render the <App /> component to the root
root.render(<App />);
