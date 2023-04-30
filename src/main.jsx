import React from "react"
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Root, {loader as rootLoader, action as rootAction} from "./routes/root"
import "./index.css"
import ErrorPage from "./error-page"
import Contact, {loader as contactLoader} from "./routes/contact"
import EditContact, {action as editAction} from "./routes/edit"

const router = createBrowserRouter([
 {
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  //Configure the loader on the route
  loader: rootLoader,
  action: rootAction,
  //Nesting takes form for children in rrd and give it an outlet at our childs ops
  //Children can share the same props
  children: [
   {
    path: "contacts/:contactId",
    element: <Contact />,
    loader: contactLoader,
   },
   {
    path: "contacts/:contactId/edit",
    element: <EditContact />,
    loader: contactLoader,
    action: editAction,
   },
  ],
 },
])

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <RouterProvider router={router} />
 </React.StrictMode>
)
