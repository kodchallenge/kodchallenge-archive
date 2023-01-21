import KcLayout from '@/src/layouts/KcLayout'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Problem = () => {
    const router = useRouter()
    const { slug, problem } = router.query
    const [tab, setTab] = useState(0)

    console.log(router.asPath)

    const handleChangeTab = (index: number) => {
        setTab(index)
    }

    return (
        <KcLayout>
            <Head>
                <title>{problem} - KodChallenge</title>
                <meta name="description" content={`${problem} problemini ${slug} dilinde çöz`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className='py-8'>
                    <div className="breadcrumbs">
                        <ul>
                            <li><Link href={"/tracks"}>Problemler</Link></li>
                            <li><Link href={`/tracks/${slug}`}>C++</Link></li>
                            <li>Hello World</li>
                        </ul>
                    </div>
                    <div className='space-x-2'>
                        <div className='badge badge-success'>Kolay</div>
                        <div className='badge badge-primary'>Skor: <strong>20</strong></div>
                    </div>
                </div>
                <div className='divider'></div>
                <div>
                    <div className="tabs" id="tabs">
                        <Link href={"#"} className="btn btn-ghost tab">Genel Bakış</Link>
                        <Link href='#my-code' className="btn tab tab-active">Tab 2</Link>
                        <Link href='solutions' className="btn btn-ghost tab">Tab 3</Link>
                    </div>
                </div>
            </div>
        </KcLayout>
    )
}

export default Problem