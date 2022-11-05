import React from 'react'

import '../scss/section/smallprojects.scss'

export const SmallProjects = ({ stack, title, description, demo, code }) => {
  return (
    <div className="works__small-box">
      <div className="works__box-stack">{stack}</div>
      <div className="works__box-main">
        <h4 className="works__main-title">{title}</h4>
        <p className="works__main-subtitle">{description}</p>
        <div className="works__main-btn">
          <a
            className="works__btn-first"
            href={demo}
            target="_blank"
            rel="noreferrer"
          >
            Live &lt;~&gt;
          </a>
          <a
            className="works__btn-second"
            href={code}
            target="_blank"
            rel="noreferrer"
          >
            Github &gt;=
          </a>
        </div>
      </div>
    </div>
  )
}
