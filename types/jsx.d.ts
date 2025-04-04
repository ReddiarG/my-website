import { ReactNode } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export interface Section {
  id: string
  offsetTop: number
  offsetHeight: number
} 