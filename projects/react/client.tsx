import React from 'https://esm.sh/react'
import ReactDom from 'https://esm.sh/react-dom'

declare global {
  var __INITIAL_STATE__: any;
}
import App from "./app.tsx";
const { todos } = window.__INITIAL_STATE__ || { todos: [] };
(ReactDom as any).hydrate(
  <App todos={todos} />,
  document.getElementById("root")
);