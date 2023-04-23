// import '@/styles/globals.css'
import React,{useState,useEffect} from 'react';
import 'tailwindcss/tailwind.css'
import '../styles/global.scss'
import { Layout } from '../components';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}
