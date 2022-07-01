import React from "react"

// Components
import Navbar from "./Navbar"
import Footer from "./Footer"
import Backtotop from "./Backtotop"

// Styles
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
      <Backtotop />
    </div>
  )
}
