import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
//import UserState from "./services/UserState";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import ReactDOM from "react-dom";
// import { React } from "react";
// import "./index.css";
// import reportWebVitals from "./reportWebVitals";

// import { BrowserRouter, Switch, Route } from "react-router-dom";

// // componentes
// import Navbar from "./component/Navbar/Navbar";
// //import Home from "./component/Home";
// import Login from "./component/Login/Login";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Navbar></Navbar>
//       <Switch>
//         <Route path="/" exact component={Login}></Route>
//         <Route path="/login" component={Login}></Route>
//       </Switch>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
