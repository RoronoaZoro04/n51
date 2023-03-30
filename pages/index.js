import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { NEXT_BUILTIN_DOCUMENT } from 'next/dist/shared/lib/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <p>
      WELCOME TO NEXT.JS
    </p>
  )
}
