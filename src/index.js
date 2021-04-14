import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MenuProvider } from "./Contex/menu-context";
import { BlogProvider } from "./Contex/blog-context";

ReactDOM.render(
  <BlogProvider>
    <MenuProvider>
      <App />
    </MenuProvider>
  </BlogProvider>,

  document.getElementById("root")
);
