import React, { Children } from "react";
import ReactDOM from "react-dom/client";
// import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body/Body";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Provider } from "react-redux";
import store from "./store";

import { Contact } from "./components/Contact/Contact";
import { Error } from "./components/Error/Error";
import RestaurantMenu, { MenuList } from "./components/MenuItem/Menu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
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
    // <div style={{ position: "relative", height: "100vh" }}>
    <Provider store={store}>
      <Header />

      <Outlet />

      <Footer />
    </Provider>
    // </div>
  );
};

const appRouter = createBrowserRouter([
  // { path: "/", element: <Body /> },

  // { path: "/about", element: <About /> },
  // { path: "/contact", element: <Contact /> },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/menu/:id", element: <MenuList /> },
      { path: "/cart", element: <Cart /> },
      // { path: "/menu/:id", element: <RestaurantMenu /> },a
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
