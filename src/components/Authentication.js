import { useState, useEffect } from 'react'
import { auth, app } from "../Firebase"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { onAuthStateChanged, signOut } from "firebase/auth";



const Authentication = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState("");

  useEffect(() => {
    //listener which checks if user is signed in or not
    const listenAuth = onAuthStateChanged(auth, (user) => {
      //if user exists set current user to user
      if (user) {
        setAuthenticatedUser(user)
      } else {
        setAuthenticatedUser(null)
      }
    })
    return () => {
      listenAuth();
    }
  }, [])

  //sign out function
  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("user sign out")
    }).catch(error => console.log("error"))
  }

  return (
    <>
      {

        /*THis is great but these are not proetcted routes! 
        The user can still manually navigate to a page they shiuldn;t be able to see */

        //if authenticated user is null, show the sign in/up options
        authenticatedUser === null ?
          <>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </> :
          //When they click sout, they are redirected to home page and signout function is called
          <Nav.Link href="/" onClick={userSignOut}>Sign Out</Nav.Link>
      }


    </>

  )
}

export default Authentication
