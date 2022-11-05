import React from 'react'
import { useTranslation } from 'react-i18next'
import '../scss/section/works.scss'

import {
  ProjectsBox,
  MainProjectData,
  SmallProjects,
  SmallProjectData,
} from '../components'

const Works = () => {
  const { t } = useTranslation()
  return (
    <section className="works">
      <div className="container">
        <h3 className="works__title page-title">
          <span>/</span>
          {t('projects')}
        </h3>
        <h4 className="works__subtitle">
          <span>#</span>
          {t('apps')}
        </h4>
        <div className="projects__main">
          {MainProjectData.map((item, index) => (
            <ProjectsBox key={index} {...item} />
          ))}
        </div>
        <div className="works__small">
          <h3 className="works__title page-title">
            <span>/</span>
            {t('small')}
          </h3>
          <div className="works__small-wrapper">
            {SmallProjectData.map((item, index) => (
              <SmallProjects key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works
