/// <reference types="vite/client" />

interface Window {
  __CONFIG__: {
    AUTH_HOST: string
    API_HOST: string
    REDIRECT_URI: string
    CASDOOR_CLIENT_ID: string
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>

  export default component
}