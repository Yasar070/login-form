import React from "react"
import ReactDom from "react-dom/client"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import App from "./App"
import Success from "./Success"
import Fail from "./Fail"


const root=ReactDom.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
  <Routes>
    <Route element={<App/>} path="/"></Route>
    <Route element={<Success/>} path="/success"></Route>
    <Route element={<Fail/>} path="/fail"></Route>
  </Routes>
  </BrowserRouter>
)