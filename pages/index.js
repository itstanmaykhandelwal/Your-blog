import Head from 'next/head'
import React from 'react'

import { PostCard,Categories,PostWidgets } from '../components'


const posts = [
    {title:"React Testing", excerpt:"Learn React Testing"},
    {title:"React With Tailwind", excerpt:"Learn React with tailwind"},
]

export default function Home() {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <Head>
                <title>Your Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='lg:col-span-8 col-span-1'>
                    {posts.map((post) => <PostCard post={post} key={post.title}/>)}
                </div>
                <div className='lg:col-span-4 col-span-1'>
                    <div className='lg:sticky relative top-8'>
                        <PostWidgets/>
                        <Categories/>
                    </div>
                </div>
            </div>
        </div>
    )
}
