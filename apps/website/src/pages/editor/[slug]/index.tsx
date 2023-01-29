import { KodEditor } from '@/src/packages/kod-editor'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const index = () => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <>
            <Head>
                <title>{slug} - KodChallenge</title>
            </Head>
            <KodEditor />
        </>
    )
}

export default index