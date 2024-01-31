import OpenApi from '@/components/OpenApi'
import type { Metadata, Viewport } from 'next'
import '@stoplight/elements/styles.min.css'

export const metadata: Metadata = {
  title: 'Yandex.Music OpenAPI',
  description: 'Open API for Yandex.Music',
}
export const viewport: Viewport = {
  width: 1240,
  initialScale: 0,
}

export default function Home() {
  return <OpenApi />
}
