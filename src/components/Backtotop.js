import React from "react"

// Styles
import * as styles from "../styles/backtotop.module.css"

export default function Backtotop() {
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress")
    let pos = document.documentElement.scrollTop
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100) / calcHeight)
    // Here I was getting an error when uploading the site to the server. With this check the issue is avoided
    if (typeof window !== `undefined`) {
      // Short logic to display the backToTop button in all pages but NOT in the home page. As it is very short and is disturbs more than any thing else
      if (pos > 100 && window.location.href !== "https://simonc.netlify.app/") {
        scrollProgress.style.display = "grid"
      } else {
        scrollProgress.style.display = "none"
      }
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0
    })
    scrollProgress.style.background = `conic-gradient(#0784b5 ${scrollValue}%, #878787 ${scrollValue}%)`
  }
  if (typeof window !== `undefined`) {
    window.onscroll = calcScrollValue
    window.onload = calcScrollValue
  }

  return (
    <div className={styles.progress} id="progress">
      <span className={styles.progressValue} id="progress-value">
        {/* This is an HTML arrow symbol */}
        &#8679;
      </span>
    </div>
  )
}
