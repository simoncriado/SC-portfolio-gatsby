import React from "react"
import * as styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <div className={styles.social}>
      <a
        className={styles.btnFooter}
        href="https://www.linkedin.com/in/simoncriado"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <i className="fa fa-linkedin"></i>
        </div>
      </a>
      <a
        className={styles.btnFooter}
        href="https://github.com/simoncriado"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <i className="fa fa-github"></i>
        </div>
      </a>
      <a className={styles.btnFooter} href="mailto:scriado.f@gmail.com">
        <div>
          <i className="fa fa-envelope"></i>
        </div>
      </a>
    </div>
  )
}
