import {Outlet, Link, useLoaderData, Form, redirect} from "react-router-dom"
import {getContacts} from "../contacts"
import {createContact} from "../contacts"

export async function action() {
 const contact = await createContact()

 return redirect(`/contacts/${contact.id}/edit`)
}

export default function Root() {
 const {contacts} = useLoaderData()
 return (
  <>
   <div id="sidebar">
    <h1>React Router Contacts</h1>
    <div>
     <form id="search-form" role="search">
      <input
       id="q"
       aria-label="Search contacts"
       placeholder="Search"
       type="search"
       name="q"
      />
      <div id="search-spinner" aria-hidden hidden={true} />
      <div className="sr-only" aria-live="polite"></div>
     </form>
     {/**This is where the "old school web" programming model shows up. As we discussed earlier, <Form> prevents the browser from sending the request to the server and sends it to your route action instead.
      */}
     <Form method="post">
      <button type="submit">New</button>
     </Form>
    </div>
    <nav>
     {/* <ul>
      <li>
       <Link to={`/contacts/1`}>Your Name</Link>
      </li>
      <li>
       <Link to={`/contacts/2`}>Your Friend</Link>
      </li>
     </ul> */}
     {contacts.length ? (
      <ul>
       {contacts.map((contact) => (
        <li key={contact.id}>
         <Link to={`contacts/${contact.id}`}>
          {contact.first || contact.last ? (
           <>
            {contact.first} {contact.last}
           </>
          ) : (
           <i>No Name</i>
          )}
         </Link>
        </li>
       ))}
      </ul>
     ) : (
      <p>
       <i>No contacts</i>
      </p>
     )}
    </nav>
   </div>
   <div id="detail">
    <Outlet />
   </div>
  </>
 )
}

//Export a data loader from root.jsx
export async function loader() {
 const contacts = await getContacts()

 return {contacts}
}
