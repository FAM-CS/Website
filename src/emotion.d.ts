import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      primaryAlt: string
      secondary: string
      tertiary: string
      accent: string
      backgroundSolid: string
      background: string
    }
  }
}
