import KcLayout from '@/src/layouts/KcLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Track = () => {
    return (
        <KcLayout>
            <Head>
                <title>Problemler - KodChallenge ⚡</title>
                <meta name="description" content="C, C++, JavaScript, Java, C# dillerinde algoritma, sorular, problemler yer alır." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-7xl mx-auto py-16 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center tails-selected-element">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-slate-200">Programlamada Kendini Geliştir</h1>
                <p className="text-3xl font-bold dark:text-slate-200">6 Farklı Kategori</p>
                <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">Problemlerle veya programlama ile ilgili uzun bir bilgilendirici yazı</p>
            </div>
            <div className='lg:grid grid-cols-2 gap-4 space-y-4 lg:space-y-0'>
                {
                    Array.from({ length: 7 }).map(x => (

                        <Link href={'/tracks/cpp'} className="card w-full bg-base-100 text-primary-content hover:-translate-y-3 ease duration-100 cursor-pointer">
                            <div className="flex-row card-body p-3 sm:p-8 items-center">
                                <div className="col-span-2 ">
                                    <div className="avatar">
                                        <div className="w-16 sm:w-20 rounded-full">
                                            <img src="https://res.cloudinary.com/kodchallenge/image/upload/v1652446325/logos/algorithm.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-10 mx-0 sm:mx-4'>
                                    <h2 className="card-title">JavaScript</h2>
                                    <div className="badge badge-primary">9 Problem</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </KcLayout>
    )
}

export default Track