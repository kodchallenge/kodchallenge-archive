import Head from 'next/head'
import { Inter } from '@next/font/google'
import s from '@/styles/main.module.css'
import Link from 'next/link'
import KcHeader from '../components/headers/KcHeader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>KodChallenge - Türkçe Programlama Platformu ⚡</title>
        <meta name="description" content="Türkçe programlama soruları çözebileceğiniz, projelerinizi tanıtabileceğiniz, kodlama yarışmaları ve etkinliklerine katılabileceğiniz ve bunları yaparken eğleneceğiniz Türkçe programlama platformu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <KcHeader />
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
      </main>
    </>
  )
}
