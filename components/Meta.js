
import React from 'react'
import Head from 'next/head'
import { insertRule } from 'next/css'

insertRule('html { height: 100% }')
insertRule('body { margin: 0 }')

const Meta = () => (
  <Head>
    <meta charSet='utf-8' />
    <title>Watch</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </Head>
)

export default Meta
