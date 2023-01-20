import React from "react";
import ReactDOM from "react-dom/client";
// import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
// const heading = React.createElement(
//   "h1",
//   {
//     id: "hello",
//   },
//   "Parcel update it automaticaly"
// );
// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "hello",
//   },
//   "Heading 1"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading, heading2]
// );

// React Element
const heading = (
  <div>
    <h1>React Element</h1>
  </div>
);

//Component

const Title = () => {
  return <h1>Title Component</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />

      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
