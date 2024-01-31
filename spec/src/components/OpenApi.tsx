'use client'

import React from 'react' // @ts-ignore
import { API } from '@stoplight/elements'
import styles from './OpenApi.module.scss'

const OpenApi: React.FC = () => {
  /*  useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
        return () => {
          document.body.style.overflow = 'visible'
          document.documentElement.style.overflow = 'visible'
        }
      }, [])*/
  return (
    <div className={styles.parent}>
      <API
        basePath={'/'}
        logo={'/symbol.svg'}
        apiDescriptionUrl="https://raw.githubusercontent.com/CheckSanity/yamusic-sdk/stable/open-api/latest.yaml"
        router={'memory'}
      />
    </div>
  )
}

export default OpenApi
