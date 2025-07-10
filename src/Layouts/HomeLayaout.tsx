import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

const HomeMeLayaout = () => {
  return (
    <>
        <Nav />
        <Outlet />
        <Footer />
    </>
  )
}

export default HomeMeLayaout