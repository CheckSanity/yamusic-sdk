'use client'

import React from 'react'
import { RedocStandalone } from 'redoc'

const OpenApi: React.FC = () => {
  return <RedocStandalone specUrl={'/yamusic-api.yaml'} />
}

export default OpenApi
