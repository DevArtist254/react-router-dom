import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root, {loader as rootLoader} from "./routes/root"
import "./index.css"
import ErrorPage from "./error-page"
import Contact from "./routes/contact"

const router = createBrowserRouter([
 {
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  //Configure the loader on the route
  loader: rootLoader,
  //Nesting takes form for children in rrd and give it an outlet at our childs ops
  children: [
   {
    path: "contacts/:contactId",
    element: <Contact />,
   },
  ],
 },
])

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
)
