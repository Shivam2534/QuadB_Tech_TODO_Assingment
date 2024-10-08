import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./Store/Store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Today from "./component's/Today/Today.jsx";
import ImportantTask from "./component's/AllTask/ImportantTask.jsx";
import Alltems from "./component's/AllTask/AlItems.jsx";
import Login from "./component's/Authentication/Login.jsx";
import Protected from "./component's/Authentication/Protected.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Protected authentication={true}>
            <Today />
          </Protected>
        ),
      },
      {
        path: "/important",
        element: (
          <Protected authentication={true}>
            <ImportantTask />
          </Protected>
        ),
      },
      {
        path: "/allitems",
        element: (
          <Protected authentication={true}>
            <Alltems />
          </Protected>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
