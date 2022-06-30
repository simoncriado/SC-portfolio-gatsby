import React from "react"
import * as styles from "../styles/backtotop.module.css"

export default function Backtotop() {
  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress")
    // let progressValue = document.getElementById("progress-value")
    let pos = document.documentElement.scrollTop
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    let scrollValue = Math.round((pos * 100) / calcHeight)
    if (typeof window !== `undefined`) {
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
        &#8679;
      </span>
    </div>
  )
}
